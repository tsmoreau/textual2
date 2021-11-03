import Head from "next/head";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Nav/Footer";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

import Machine from "../../components/Machines/shiftysharks";

export default function ShiftySharksMainPage() {
  return (
    <div className="text-black">
      <Head>
        <title>Shifty Sharks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex relative  w-screen mx-auto justify-items bg-gradient-to-b from-cyan-300 via-blue-700 to-indigo-800">
        <div className="pt-16 justify-center flex-col mx-auto max-w-7xl w-full h-full ">
          <div className="flex flex-col items-center text-center h-full w-full">
            <img
              src="./test.svg"
              className=" mt-3 w-3/4 md:w-1/2 lg:w-2/5 h-3/4 md:h-1/2 lg:h-2/5 rounded-full"
            />
            <p
              id="title"
              className="-mt-6  w-full text-center text-9xl text-gray-800 font-bold mx-auto"
            >
              Shifty Sharks
            </p>
            <div className="mt-0 px-2 lg:ml-8 text-center font-mono flex flex-col md:flex-row">
              <div className="rounded-lg bg-gray-100 border px-3 mx-1 mt-2">
                {" "}
                213 minted
              </div>
              <div className="rounded-lg bg-gray-100 border px-3 mx-1 mt-2">
                {" "}
                4487 remaining
              </div>
              <div className="rounded-lg bg-gray-100 border px-3 mx-1 mt-2">
                {" "}
                21 days until reveal period
              </div>
            </div>
            <div className="mt-2 px-2 lg:ml-8 text-center font-mono flex">
              <div className="rounded-lg bg-gray-100 border px-6 mx-1">
                {" "}
                you have minted 2 sharks
              </div>
            </div>

            <div className="  justify-center mt-2 lg:mt-6 w-11/12 rounded-lg flex flex-col lg:flex-row">
              <div className="mt-4 ml-0 lg:ml-16 w-full lg:w-3/5 py-8 lg:py-12 lg:px-12">
                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul className="">
                    <li className="px-1 lg:px-4 py-2">
                      Minting is FREE for one month
                    </li>

                    <li className="px-1 lg:px-8 py-1.5">
                      After one month minting cost will change to .001 ETH
                    </li>
                    <li className="px-1 lg:px-8 py-1.5">
                      Minted sharks can be revealed for .005 ETH each, once
                      reveal period begins
                    </li>
                  </ul>
                </div>

                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul>
                    <li className="px-1 lg:px-8 py-1.5">
                      Reveal period begins one month after launch or 24hrs after
                      sell-out, whichever happens first
                    </li>
                    <li className="px-1 lg:px-8 py-1.5">
                      Up to 3 sharks may be minted at once, limit 9 minted
                      sharks per address
                    </li>
                  </ul>
                </div>
                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul>
                    <li className="px-1 lg:px-8 py-2">
                      Separate Discord chat access for both hidden and revealed
                      sharks
                    </li>
                    <li className="px-1 lg:px-8 py-2">
                      Randomness is set during mint, and is provided by
                      Chainlink
                    </li>
                  </ul>
                </div>
                <div className="my-1 px-5 py-4 font-mono lg:mx-0 text-gray-100 border rounded-lg h-auto text-center  items-center">
                  <ul>
                    <li className="px-1 py-2 lg:px-8 hidden lg:flex">
                      To mint, see machine at right, for more project
                      information see below
                    </li>
                    <li className="px-1 py-2 lg:px-8 lg:hidden ">
                      To mint, see machine below, for more project information
                      see further below machine
                    </li>
                  </ul>
                </div>
                <div className="mt-1.5">
                  <button
                    type="button"
                    className="mx-0.5 inline-flex text-base justify-center transform translate-y-1 font-bold  text-sm font-medium text-gray-500  border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    <img
                      className="w-8 h-8 "
                      src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.png"
                    />
                  </button>

                  <button
                    type="button"
                    className="mx-0.5 inline-flex text-base justify-center  transform translate-y-1 pt-2 font-bold  text-sm font-medium text-gray-500  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    <img
                      className="w-8 h-8"
                      src="https://etherscan.io/images/brandassets/etherscan-logo-circle.png"
                    />
                  </button>
                </div>
              </div>
              <div className="-mt-6  w-full lg:w-1/2">
                <Machine />
              </div>
            </div>
            <div className="mt-12 flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold">Fully On Chain PFP</p>
              <div className="my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Shifty Sharks are created from styled SVGs and the final sharks
                are fully-on-chain. We follow the Avastars model, of pointing
                the main image link in the metadata to a server, to allow for
                faster serving. There is backup function built into the contract
                however, and the combination of SVGs which makes up your shark
                is provably unique and your complete image is retrievable so
                long as the chain exists. IPFS is used for unrevealed sharks.
              </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold">Individual Reveal Mechanic</p>
              <div className="my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Shifty Sharks are free to mint in order to allow users the
                widest possible oppurtunity to claim one. Users will still have
                to pay tx costs to the network, of course. Free to mint allows
                users to curate value around the potential for new traits
                entering the market. Guaranteed randomness of traits via
                Chainlink.
              </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold">Traits Details</p>
              <div className="my-1 px-4 lg:px-12 py-4 flex justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                Traits are derived from a random string gotten from Chainlink.
                Sections of this string map to Trait Types (see tables below for
                more information on trait types). The values of these sections
                determine the type of trait selected. Some traits are part of a
                set, but not all. Trait trading is currently being explored to
                allow users to continue to curate value after reveal.
              </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-3/4 mt-1  px-2 py-4 flex justify-center font-mono  text-gray-100 border rounded-lg h-auto text-center  items-center">
              <p className="font-bold pt-3">Traits Tables</p>
              <div className="my-1 px-2 py-4 flex flex-col justify-center font-mono lg:mx-0 text-gray-100 rounded-lg h-auto text-center  items-center">
                <table class="table-auto">
                  <tbody className="">
                    <tr className="">
                      <td>Levels of Trait Rarity:</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Total Number of Trait Sets:</td>

                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Total Number of Traits:</td>

                      <td>125</td>
                    </tr>
                    <tr>
                      <td className="pr-3">Possible Variations:</td>

                      <td>456355 </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-6 font-bold">Traits Rarity List:</div>
                <div className="mt-2 px-6 lg:px-36">
                  Common, Uncommon, Rare, Epic, Legendary, Mythic
                </div>
                <div className="mt-6 font-bold">Traits Sets List:</div>
                <div className="mt-2 px-6 lg:px-36">
                  Base, Fancy, Sport, Punk, Sci-Fi, Western, Monk, Hippy, Chad,
                  Virgin
                </div>
                <div className="mt-6 font-bold">Traits Type List:</div>
                <div className="mt-2 px-6 lg:px-36">
                  Color, Head Item, Eyes Item, Mouth Item, Clothing Item,
                  Necklace, Left Fin Item, Right Fin Item, Tail Item
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-44 shadow-lg pt-12 h-36 bg-indigo-800 w-full justify-center backdrop-filter backdrop-blur-lg bg-opacity-100">
        <ul className="w-44 text-gray-200 pt-6 font-mono text-sm flex flex-row justify-center text-center mx-auto">
          <li className=" mx-1.5">
            <a href="/about" className="cursor-pointer">
              about
            </a>
          </li>
          <li className=" mx-1.5">
            <a href="/blog" className="cursor-pointer">
              blog
            </a>
          </li>
          <li className=" mx-1.5">
            <a href="/contact" className="cursor-pointer">
              contact
            </a>
          </li>
        </ul>
        <ul className="w-56 text-gray-200 mt-3 font-mono text-sm flex flex-col mx-auto">
          <li className="flex justify-center">Decentralized Pictures LLC</li>
          <li className="flex justify-center">Terms & Conditions</li>
          <li className="flex justify-center">Privacy Policy</li>
        </ul>
      </div>

      <style jsx>{`
        @font-face {
          font-family: myFirstFont1;
          src: url(/fonts/BlankRiver.ttf);

          #title {
            font-family: myFirstFont1;
            text-shadow: 3px 4px white;
          }

          .menu {
            background-color: green;
          }
        }
      `}</style>
    </div>
  );
}
