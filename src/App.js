import React from 'react';
import Form from './components/Form';

function App() {
  return (
    <main className="h-screen flex items-center justify-center px-6 lg:px-32 bg-lime-50">
      <header className="w-full absolute left-0 top-0 p-4 lg:p-14">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">[ SearchSmartly ]</h1>
            <span className="text-sm">Be security conscious</span>
          </div>
          <div>
            <ul className="hidden lg:flex">
              <li className="ml-24">
                <a href="/#">
                  <div className="flex items-center justify-end">
                    <div className="w-10 text-sm border-b border-solid border-gray-800"></div>
                    <h1 className="ml-3 text-sm font-bold">1</h1>
                  </div>
                  <div className="text-right text-xs">Enter Password</div>
                </a>
              </li>
              <li className="ml-24">
                <a href="/#">
                  <div className="flex items-center justify-end">
                    <div className="w-10 text-sm border-b border-solid border-gray-800"></div>
                    <h1 className="ml-3 text-sm font-bold">2</h1>
                  </div>
                  <div className="text-right text-xs">Enter Key</div>
                </a>
              </li>
              <li className="ml-24">
                <a href="/#">
                  <div className="flex items-center justify-end">
                    <div className="w-10 text-sm border-b border-solid border-gray-800"></div>
                    <h1 className="ml-3 text-sm font-bold">3</h1>
                  </div>
                  <div className="text-right text-xs">Click on Encode</div>
                </a>
              </li>

              <li className="ml-24">
                <a href="/#">
                  <div className="flex items-center justify-end">
                    <div className="w-10 text-sm border-b border-solid border-gray-800"></div>
                    <h1 className="ml-3 text-sm font-bold">4</h1>
                  </div>
                  <div className="text-right text-xs">Copy & Use</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Form />
      <footer className="text-sm absolute right-0 bottom-0 p-4 lg:p-14">
        <p className="font-medium mb-1">Powered by SearchSmartly, Inc.</p>
        <a href="https://github.com/ZyroGatsby/search-smartly">Github Repository</a>
      </footer>
    </main>
  );
}

export default App;
