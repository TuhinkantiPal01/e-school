import { Button } from "@material-tailwind/react";

const PrimaryButton = ({text}) => {
    return (
        <>
            <Button size="lg" className="bg-primary bg-opacity-80 rounded-none hover:bg-opacity-70 transition duration-150 ease-out hover:ease-in">{text}</Button>
        </>
    );
};

export default PrimaryButton;