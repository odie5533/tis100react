export function AdoptionFormPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Congratulations on your new monster!');
  };

  return (
    <div>
      <h1>Adopt a Monster</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Adopt</button>
      </form>
    </div>
  );
}
