
import { FiCheck,FiHome,FiUser,FiFolder,FiSquare,FiInfo } from "react-Icons/fi";

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
            Icon:  FiHome, 
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
            Icon:  FiCheck,
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
            Icon:  FiFolder ,
            variant:"subtle",
            fullWidth: true
        }
    },
    {   
        text: 'Consultas',
        icon:  FiInfo ,
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
            Icon:  FiUser ,
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
            Icon:  FiSquare ,
            variant:"subtle",
            fullWidth: true
        }
    },

]