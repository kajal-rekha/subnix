const PlanCard = ({ plan }) => {
    return (
        <div className="border-b mb-2">
            <h3>Name: {plan.name}</h3>
            <p>Price: {plan.price}</p>
            <p>
                {" "}
                Features :
                {plan.features.map((feature, i) => (
                    <ul
                        key={i}
                        className="list-disc list-inside mt-2 text-light/70"
                    >
                        <li>{feature}</li>
                    </ul>
                ))}
            </p>
            <p>durationUnit : {plan.durationUnit}</p>
        </div>
    );
};

export default PlanCard;
