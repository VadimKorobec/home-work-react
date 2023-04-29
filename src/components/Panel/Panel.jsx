export const Panel = ({ titel, children }) => {
  return (
    <section>
      <h2>{titel}</h2>
      {children}
    </section>
  );
};
