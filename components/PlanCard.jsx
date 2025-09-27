const PlanCard = ({ plan }) => {
    return (
        <div className=" bg-secondary text-light flex flex-col gap-2 p-5 rounded-lg shadow-md border border-light/10">
            <div className="flex flex-col gap-2 p-3 rounded-md">
                <h3 className="text-2xl"> {plan.name}</h3>
                <p className="text-xl">
                    {" "}
                    ${plan.price} /{" "}
                    <span>
                        {" "}
                        {plan.duration} {plan.durationUnit}{" "}
                    </span>{" "}
                </p>
                <p></p>
            </div>
            <p>
                Features :
                {plan.features.map((feature, i) => (
                    <ul
                        key={i}
                        className="list-disc list-inside mt-2 text-light/70 "
                    >
                        <li>{feature}</li>
                    </ul>
                ))}
            </p>

            <button className="bg-blue p-1.5 rounded-md cursor-pointer text-secondary  mt-2">
                Subscripe Plan
            </button>
        </div>
    );
};

export default PlanCard;
