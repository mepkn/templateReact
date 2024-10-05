export const Footer = () => {
  return (
    <footer className="bg-gray-300 p-2 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
