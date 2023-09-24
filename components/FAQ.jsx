const FAQ = () => {
  return (
    <div className="mt-[70px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-start gap-1">
        <span className="text-[50px] font-bold text-darkbl">
          Frequently Asked Questions
        </span>
        <span className="text-2xl font-bold text-gray-600">
          Your right to Know!
        </span>
        <div className="bg-darkvl w-[120px] h-[3px] mt-[10px]"></div>
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl">
                <summary className="px-4 py-6">Can I change the date after booking?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                Yes, you can change trip dates 15 days before the departure date. It also depends upon the availability of the slots on the respective date.
                </p>
              </details>
            </div>
          </div>
        </div>
    </div>
  );
};
export default FAQ;
