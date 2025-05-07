type NavLink = {
  index: number;
  title: string;
  url: string;
  
};

export const navLinks: NavLink[] = [
  { 
    index:1,
    title: "Home", url: "/" 
},
{
    index:2,
    title: "About", url: "/about" 
},
{ 
    index:3,
    title: "Programs", url: "/programs"
 },
{
    index:4,
    title: "Get Involved", url: "/get-involved" 
},
{ 
    index:5,
    title: "Contact", url: "/contact"
 },
];
