import React, { useEffect, useMemo } from "react";

function PaymentInfo({ watch, register, setValue }) {
  const feeconfig = {
    "open-hosting": {
      fee: 0,
      label: "Free Hosting",
    },
    "host-managed": {
      fee: 10,
      label: "Host Managed",
    },
    "platform-assisted": {
      fee: 20,
      label: "Platform Assisted",
    },
  };

  const entryFeeValue = watch("payment.entryFee");
  const platformFeeValue = watch("payment.platformFee");
  const hostingType = watch("payment.hostingType");

  const entryFee = Number(entryFeeValue || 0);
  const platformFee = Number(platformFeeValue || 0);
  const hostingFee = feeconfig[hostingType]?.fee || 0;
  const gstAmount = entryFee * 0.18;

  const totalAmount = useMemo(() => {
    return entryFee + platformFee + hostingFee + gstAmount;
  }, [entryFee, platformFee, hostingFee, gstAmount]);

  useEffect(() => {
    setValue("payment.hostingFee", hostingFee);
    setValue("payment.gstAmount", Number(gstAmount.toFixed(2)));
    setValue("payment.totalAmount", Number(totalAmount.toFixed(2)));
  }, [hostingFee, gstAmount, totalAmount, setValue]);

  return (
    <div className="w-full h-full">
      <header className="font-bold text-xl mb-4">
        Payment And Information
      </header>

      <main className="w-full h-full flex flex-col gap-3">
        {/* Entry Fee */}
        <div className="px-5 py-5 rounded-xl bg-white text-black flex flex-col">
          <label className="px-2 font-semibold" htmlFor="entryFee">
            Joining Fee *
          </label>

          <input
            className="py-2 rounded-3xl px-3 bg-gray-300 placeholder:text-gray-700 font-bold outline-none"
            placeholder="₹ Join Fee Per Player [INR]"
            type="number"
            id="entryFee"
            {...register("payment.entryFee", {
              valueAsNumber: true,
            })}
          />
        </div>

        {/* Hosting Type */}
        <div className="px-5 py-5 rounded-xl bg-white text-black flex flex-col">
          <label className="px-2 font-semibold" htmlFor="hostingType">
            Hosting Type *
          </label>

          <select
            id="hostingType"
            className="py-2 rounded-3xl px-3 bg-gray-300 font-bold outline-none"
            {...register("payment.hostingType")}
          >
            <option value="open-hosting">Open Hosting</option>
            <option value="host-managed">Host Managed</option>
            <option value="platform-assisted">Platform Assisted</option>
          </select>
        </div>

        {/* Platform Fee */}
        <div className="px-5 py-5 rounded-xl bg-white text-black flex flex-col">
          <label className="px-2 font-semibold" htmlFor="platformFee">
            Platform Fee
          </label>

          <input
            className="py-2 rounded-3xl px-3 bg-gray-300 placeholder:text-gray-700 font-bold outline-none"
            placeholder="₹ Platform Fee"
            type="number"
            id="platformFee"
            {...register("payment.platformFee", {
              valueAsNumber: true,
            })}
          />
        </div>

        {/* Hidden registered values */}
        <input type="hidden" {...register("payment.hostingFee")} />
        <input type="hidden" {...register("payment.gstAmount")} />
        <input type="hidden" {...register("payment.totalAmount")} />

        {/* Payment Summary */}
        <section className="bg-white rounded-xl p-4 text-black">
          <div className="w-full py-2 px-2 flex items-center justify-center font-bold text-xl bg-gray-500 text-white rounded-lg">
            Payment Via UPI
          </div>

          {/* Hosting Fee */}
          <div className="flex gap-5 text-black py-5 font-bold w-full">
            <h1 className="text-slate-400">Hosting Fee:</h1>

            <div className="flex justify-between items-center text-black gap-2">
              <h1>
                {hostingFee === 0 ? (
                  <span className="text-gray-500">FREE</span>
                ) : (
                  hostingFee
                )}
              </h1>

              <span>INR</span>

              <span className="font-serif text-[12px] bg-purple-700/10 border-purple-600 text-purple-600 border px-3 rounded-2xl flex items-center">
                {feeconfig[hostingType]?.label || "Host Plan"}
              </span>
            </div>
          </div>

          {/* Entry Fee */}
          <div className="flex gap-5 font-bold w-full py-1">
            <h1 className="text-slate-400">Entry Fee:</h1>

            <h1 className="flex justify-between items-center text-black gap-2">
              {entryFee} <span>INR</span>
            </h1>
          </div>

          {/* GST */}
          <div className="flex gap-5 font-bold w-full py-1">
            <h1 className="text-slate-400">GST 18%:</h1>

            <h1 className="flex justify-between items-center text-black gap-2">
              {gstAmount.toFixed(2)} <span>INR</span>
            </h1>
          </div>

          {/* Platform Fee */}
          <div className="flex gap-5 font-bold w-full py-1">
            <h1 className="text-slate-400">Platform Fee:</h1>

            <h1 className="flex justify-between items-center text-black gap-2">
              {platformFee} <span>INR</span>
            </h1>
          </div>

          {/* Total */}
          <div className="flex gap-5 font-bold w-full mt-4 border-t pt-3">
            <h1 className="text-slate-900">Total:</h1>

            <h1 className="flex justify-between items-center text-green-600 gap-2">
              {totalAmount.toFixed(2)} <span>INR</span>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaymentInfo;