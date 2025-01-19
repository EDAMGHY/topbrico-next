import { Header } from "@/layout";

const DashboardPage = () => {
  return (
    <>
      <Header title={"Overview"} />
      <div className="p-4">
        <h1 className="text-2xl font-semibold">
          Hello,{" "}
          <span className="font-bold italic text-orange-400">John Doe</span>
        </h1>
        <p>
          Welcome to your dashboard! Here you can manage your profile, view your
          favorite artisans and more.
        </p>
      </div>
    </>
  );
};

export default DashboardPage;
