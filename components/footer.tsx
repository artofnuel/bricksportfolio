const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          />
          <div className="uppercase text-sm tracking-wider">Made by Emmanuel Inua</div>
        </div>
        <div className="text-gray-500 text-sm">
          <a href="https://wa.me/+2348022352095" className="hover:text-pink-600">
            Interested in having your own website? Click Me!
          </a>
        </div>
          © {new Date().getFullYear()}{' '}
      </div>
    </footer>
  )
}

export default Footer
