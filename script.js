
function handleSubmit(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value.trim());
  const email = encodeURIComponent(f.email.value.trim());
  const message = encodeURIComponent(f.message.value.trim());
  const subject = `Website inquiry from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
  const mailto = `mailto:whahkn@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  f.reset();
  return false;
}
