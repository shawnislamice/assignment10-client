import { GridLoader } from "react-spinners";

const Spinner = () => {
    return (
      <div className="flex relative min-h-screen top-[50%] justify-center items-center">
        <GridLoader color="#F7424F" />
      </div>
    );
};

export default Spinner;