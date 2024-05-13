import DashBoard from './(Admin)/(DashBoard)/DashBoard';
import Main from './(Main)/Main';

export default function Home() {
  return (
    <Main>
      <div className="h-full w-full mt-16 bg-gray-50 relative overflow-y-auto lg:ml-64">
        <DashBoard />
      </div>
    </Main>
  );
}
