import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
// import RecentTransactions from '@/components/RecentTransactions';
// import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  // const currentPage = Number(page as string) || 1;
  const loggedIn =await getLoggedInUser();
  // const accounts = await getAccounts({
  //   userId: loggedIn.$id
  // })

  // if(!accounts) return;

  // const accountsData = accounts?.data;
  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  // const account = await getAccount({ appwriteItemId })

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>

        {/* <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:823.50} , {currentBalance:2355.3}]}
      />
    </section>
  );
};

export default Home;
