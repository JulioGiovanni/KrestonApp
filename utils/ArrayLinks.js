

import { FiCheck,FiHome,FiUser,FiFolder,FiSquare,FiInfo } from "react-icons/fi";

export const AdminLinks = [
    {   
        link: '/dashboard',  
        ComponentProps:{ 
            sx:{
                display: 'flex',
                justifyContent: 'flex-start',
                borderRadius: '50px',
                margin:'10px 0',
            },
            style:{
                
            },

            text: 'Inicio',
            icon: <FiHome />,
            variant:"subtle",
            fullWidth: true
        }
    },
    {   
        link: '/aceptacion',  
        ComponentProps:{ 
            sx:{
                display: 'flex',
                justifyContent: 'flex-start',
                borderRadius: '50px',
                margin:'10px 0',
            },
            text: 'Aceptación',
            icon: <FiCheck />,
            variant:"subtle",
            fullWidth: true
        }
    },
    {   
        link: '/independencias',  
        ComponentProps:{ 
            sx:{
                display: 'flex',
                justifyContent: 'flex-start',
                borderRadius: '50px',
                margin:'10px 0',
            },
            text: 'Independencia',
            icon: <FiFolder />,
            variant:"subtle",
            fullWidth: true
        }
    },
    {   
        text: 'Consultas',
        icon: <FiInfo />,
        accordion:true,
        accordionLinks:[
            {link: '/consultas/aprobadas',
                ComponentProps:{ 
                    text:' Aprobadas',
                    variant:"subtle",
                    fullWidth: true,
                    sx:{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        borderRadius: '50px',
                        margin:'10px 0',
                    }
                }
            },
            {link: '/consultas/rechazadas',
                ComponentProps:{ 
                    text:' Rechazadas',
                    variant:"subtle",
                    fullWidth: true,
                    sx:{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        borderRadius: '50px',
                        margin:'10px 0',
                    }
                }
            },
            {link: '/consultas/espera',
                ComponentProps:{ 
                    text:' En espera',
                    variant:"subtle",
                    fullWidth: true,
                    sx:{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        borderRadius: '50px',
                        margin:'10px 0',
                    }
                }
            },
        ]
        
    },
    {   
        link: '/usuarios',  
        ComponentProps:{ 
            sx:{
                display: 'flex',
                justifyContent: 'flex-start',
                borderRadius: '50px',
                margin:'10px 0',
            },
            text: 'Usuarios',
            icon: <FiUser />,
            variant:"subtle",
            fullWidth: true
        }
    },
    {   
        link: '/areas',  
        ComponentProps:{ 
            sx:{
                display: 'flex',
                justifyContent: 'flex-start',
                borderRadius: '50px',
                margin:'10px 0',
            },
            text: 'Áreas',
            icon: <FiSquare />,
            variant:"subtle",
            fullWidth: true
        }
    },

]