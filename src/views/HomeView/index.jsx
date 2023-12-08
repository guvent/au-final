import React from "react";
import Connect from "../../components/Wallet/Connect";
import { useNavigate } from "react-router-dom";

export default function HomeView({ onConnectWallet }) {
    const navigator = useNavigate();

    const handleConnectWallet = (address) => {
        typeof onConnectWallet === "function" && onConnectWallet(address);
    };

    return (
        <section className="relative bg-white overflow-hidden">
            <div className="py-48">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap xl:items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <h1 className="py-8 mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                                Welcome Smart Contract Creator!
                            </h1>
                            <p className="py-2 mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                                We can create smart contracts and deploy them to
                                blockchain networks! Play a crucial role in
                                shaping the decentralized finance (DeFi)
                                landscape, enabling various applications, from
                                creating custom currencies to representing
                                ownership of digital and physical assets on the
                                blockchain. They provide a foundation for
                                developers to create diverse and innovative
                                decentralized applications (DApps) and you can
                                leverage blockchain technology for various use
                                cases.
                            </p>
                            <div className="flex flex-wrap py-6">
                                <div className="w-full md:w-auto md:mr-4">
                                    <Connect
                                        onConnected={handleConnectWallet}
                                        onNextPage={() => navigator("/options")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative mx-auto md:mr-0 max-w-max">
                                <img
                                    className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                                    src="/img/circle3-yellow.svg"
                                    alt=""
                                ></img>
                                <img
                                    className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                                    src="/img/dots3-blue.svg"
                                    alt=""
                                ></img>
                                <img
                                    className="relative rounded-7xl"
                                    src="/img/header.jpg"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
