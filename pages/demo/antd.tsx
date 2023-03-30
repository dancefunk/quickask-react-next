import { Switch } from 'antd';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

function Page()
{
  return (
    <>
      <h1>Antd UI框架</h1>
      <Switch defaultChecked onChange={onChange} />
    </>
  )
}

export default Page