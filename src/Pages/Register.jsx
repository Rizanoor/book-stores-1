import AuthButton from '../Components/Body/Auth/Auth-Button';
import AuthForms from '../Components/Body/Auth/Auth-Forms';
import AuthTitle from '../Components/Body/Auth/Auth-Title';
import Header from '../Fragments/Header';

function Register() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3">
        <AuthTitle title="Daftar" />
        <AuthForms
          name="fullname"
          type="text"
          id="fullname"
          placeholder="Masukkan nama lengkap"
        />
        <AuthForms
          name="email"
          type="email"
          id="email"
          placeholder="Masukkan email"
        />
        <AuthForms
          name="password"
          type="password"
          id="password"
          placeholder="Masukkan kata sandi"
        />
        <AuthButton tag="Daftar" type="submit" />
      </div>
    </>
  );
}

export default Register;
