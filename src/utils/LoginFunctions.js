import axios from 'axios';
import Swal from 'sweetalert2';
import { bearer } from './BearerToken';
import { useUserLoggedIn } from '@/stores/userLoggedIn';

// State



export const loginFunction = async (email, password, tenantId) => {
        const userLoggedIn = useUserLoggedIn();
        console.log(email, password, tenantId);
        try{
            const response = await axios.post('https://prodapi.juno.one/login', {
                "email" : email,
                "password" : password
            },
            {
                headers : {
                    "X-TenantID": tenantId,
                    "Access-Control-Allow-Headers": "*"
                }
            })
            if( response.status === 200 ){
                    console.log(response)
                    localStorage.setItem(`token`, bearer.token
                    );
                    userLoggedIn.settingLoggedIn();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'You have logged in successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

        } catch (e){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }                
    }