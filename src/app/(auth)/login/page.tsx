export default function LoginPage() {
  const loginHandler = async () => {
    const response = await fetch("http://localhost:3000/api/login"); //calling route handler in api folder
    console.log(`===> Response: `, response);
    return response;
  };
  loginHandler().then((data) => console.log(data));
  return (
    <div>
      <button>Login</button>
    </div>
  );
}