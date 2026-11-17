import logo from './image/logo.jpeg';

export default function Header() {
  return (
    <header className="p-4 shadow-sm">
      <div className="flex items-center justify-center gap-3">
        <img 
          src={logo} 
          alt="Chef Claude logo" 
          className="h-10 w-10 object-contain" 
        />
        <h3 className="text-xl font-semibold capitalize">
          Chef Claude
        </h3>
      </div>
    </header>
  );
}
