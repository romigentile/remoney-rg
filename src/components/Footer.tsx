import { Facebook, Instagram, Twitter} from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} ReMoney. Todos los derechos reservados.</p>
          
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter size={20} />
            </a>
          </div>
  
          <nav className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Contacto</a>
            <a href="#" className="hover:underline">Política de Privacidad</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;