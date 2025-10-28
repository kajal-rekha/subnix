import { Check } from "lucide-react";

const PlanCard = ({ plan }) => {
    return (
        <div className="overflow-hidden  bg-secondary p-5 rounded-xl shadow-md border border-light/10 hover:border-blue/40 eq mt-5">
            <div
                className="flex flex-col gap-2  
                   text-light  "
            >
                <div className="flex flex-col gap-2 p-3 rounded-md">
                    <h3 className="text-2xl"> {plan.name}</h3>
                    <p className="text-xl">
                        {" "}
                        ${plan.price} /{" "}
                        <span>
                            {" "}
                            {plan.duration} {plan.durationUnit}{" "}
                        </span>
                    </p>
                    <p></p>
                </div>
                <p className="mt-5">
                    Features :
                    {plan.features.map((feature, i) => (
                        <ul key={i} className=" mt-2 text-light/70 ">
                            <li className="flex items-center gap-3">
                                <Check className="w-4 h-4 bg-blue/30 p-1 rounded-full" />

                                {feature}
                            </li>
                        </ul>
                    ))}
                </p>

                <button className="bg-blue p-1.5 rounded-md cursor-pointer text-secondary mt-2">
                    Subscripe Plan
                </button>
            </div>
        </div>
    );
};

export default PlanCard;
