import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="bg-gray flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Revolutionize Your Finances with <br />
                <span className="text-4xl md:text-[6rem] text-blue-800 font-bold mt-1 leading-none">
                  Budget Buddy
                </span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-700 mt-4">
                Powered by AI, our app helps you make smarter financial decisions. 
                Visualize your spending patterns with interactive dashboards and graphs, 
                all tailored to help you achieve your financial goals.
              </p>
            </>
          }
        >
          <Image
            src={`/images/dash.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;
