export default function Logo({ big }) {
  return (
    <h1 className={`logo ${big ? 'big' : ''}`}>
      Sticky<span>&lt;code&gt;</span>
    </h1>
  );
}
