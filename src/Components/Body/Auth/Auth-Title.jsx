function AuthTitle(props) {
  const { title } = props;
  return (
    <div>
      <h1 className="text-tertiary text-[1.75rem] mt-20 mb-10">{title}</h1>
    </div>
  );
}
export default AuthTitle;
