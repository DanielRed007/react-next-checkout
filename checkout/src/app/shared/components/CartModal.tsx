import { Fragment, useState } from "react";
import { useHomeContext } from "@/app/context/HomeContext";
import { Dialog, Transition } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "../icons/CheckIcon";
import { CustomAlert } from "./CustomAlert";

export const CartModal = () => {
  const { isCartOpen, closeCart, gamesCart } = useHomeContext();
  const [selected, setSelected] = useState(gamesCart[0]);

  return (
    <Transition appear show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Shopping Cart
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Review Your Items</p>

                  <div className="w-full px-4 py-16">
                    <div className="mx-auto w-full max-w-md">
                      <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">
                          Your Cart Items
                        </RadioGroup.Label>
                        <div className="space-y-2">
                          {gamesCart.length > 0 ? (
                            gamesCart.map((game) => (
                              <RadioGroup.Option
                                key={game.name}
                                value={game}
                                className={({ active, checked }) =>
                                  `${
                                    active
                                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                                      : ""
                                  }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <div className="flex w-full items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="text-sm">
                                          <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                              checked
                                                ? "text-white"
                                                : "text-gray-900"
                                            }`}
                                          >
                                            {game.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="span"
                                            className={`inline ${
                                              checked
                                                ? "text-sky-100"
                                                : "text-gray-500"
                                            }`}
                                          >
                                            <span>
                                              {game.price}/{game.year}
                                            </span>{" "}
                                            <span aria-hidden="true">
                                              &middot;
                                            </span>{" "}
                                            <span>{game.producer}</span>
                                          </RadioGroup.Description>
                                        </div>
                                      </div>
                                      {checked && (
                                        <div className="shrink-0 text-white">
                                          <CheckIcon />
                                        </div>
                                      )}
                                    </div>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))
                          ) : (
                            <CustomAlert
                              title="Upps!!"
                              subtitle="Your cart is empty, add items to the cart"
                            />
                          )}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeCart}
                    data-testid="cart-close-btn"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
