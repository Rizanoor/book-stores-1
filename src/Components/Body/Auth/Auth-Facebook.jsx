import facebook from '../../../assets/icons/facebook.webp';

function AuthFacebook(props) {
  const { type } = props;

  return (
    <div className="mt-6">
      <div className="flex justify-center items-center gap-2">
        <span className=" w-1/3 h-[1.5px] bg-border opacity-40"></span>
        <span className="text-sm text-border font-semibold italic">
          Akun lainnya
        </span>
        <span className=" w-1/3 h-[1.5px] bg-border opacity-40"></span>
      </div>
      <div className="flex justify-center mt-5">
        <button
          type={type}
          className="btn btn-ghost bg-main border border-second rounded-full font-heading text-lg font-semibold w-full text-main hover:text-second"
        >
          <img src={facebook} alt="" className="w-6 bg-transparent" />{' '}
          <span className="normal-case bg-transparent text-second text-sm ml-2">
            Masuk dengan akun Facebook
          </span>
        </button>
      </div>
    </div>
  );
}

export default AuthFacebook;
