export const PrintableFooter = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <footer className="mt-auto pt-8 text-center text-resume-text border-t border-resume-accent/20">
      <p>Página {pageNumber} de 3</p>
    </footer>
  );
};