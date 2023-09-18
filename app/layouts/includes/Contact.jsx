const Contact = () => {
    return (
        <div id="contact" className="h-[600px] m-5">
            <h2 className="flex justify-center content-center text-[30px]">
                Contact
            </h2>
            <p className="flex justify-center content-center italic pb-5 m-5">
                Please contact me directly at dsdeveloper@outlook.com
            </p>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Your Message"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
