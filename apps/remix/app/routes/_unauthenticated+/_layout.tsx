import { useState } from 'react';

import { FaGithub } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { Outlet } from 'react-router';

import backgroundPattern from '@documenso/assets/images/background-pattern.png';

export default function Layout() {
  const [noticeBox, setNoticeBox] = useState(true);
  return (
    <>
      <header>
        <div className="px-20">
          <div>
            <img
              src="/static/atLeaderLogo.png"
              className="img-fluid rounded-top h-20"
              alt="atLeaderLogo.png"
            />
          </div>
          <div></div>
        </div>
      </header>
      {noticeBox && (
        <div className="mx-auto mb-2 w-max rounded-lg border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-900 shadow-md">
          <div className="flex justify-between">
            <h2 className="mb-1 text-lg font-semibold">⚠ Important Notice</h2>
            <IoClose className="cursor-pointer" onClick={() => setNoticeBox(false)} />
          </div>
          <ul className="list-inside list-disc space-y-1 text-sm font-light">
            <li>
              The source code for this service is available (
              <a
                href="https://github.com/atleaderdotcom/signDocs"
                target="_blank"
                className="hover:text-black"
              >
                <FaGithub className="inline" />
              </a>
              ) to all users under the AGPL v3.
            </li>
            <li>
              This service is licensed under the GNU Affero General Public License v3 -{' '}
              <a
                href="https://github.com/atleaderdotcom/signDocs?tab=AGPL-3.0-1-ov-file#readme"
                target="_blank"
                className="hover:text-black"
              >
                <FaGithub className="inline" />
              </a>
              .
            </li>
            <li>
              &copy; and licensing notices are included in the source code and can be viewed in the
              'README.md' file on{' '}
              <a
                href="https://github.com/atleaderdotcom/signDocs?tab=readme-ov-file#readme"
                target="_blank"
                className="hover:text-black"
              >
                <FaGithub className="inline" />
              </a>
            </li>
            <li>
              We impose no additional restrictions beyond the terms of the <strong>AGPL v3.</strong>
            </li>
            <li>This service remains fully open-source and is not proprietary.</li>
            <li>
              Original &copy; for Documenso is held by its contributors. Our modifications are
              licensed under AGPL v3.
            </li>
          </ul>
        </div>
      )}

      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12 md:p-12 lg:p-24">
        <div>
          <div className="absolute -inset-[min(600px,max(400px,60vw))] -z-[1] flex items-center justify-center opacity-70">
            <img
              src={backgroundPattern}
              alt="background pattern"
              className="dark:brightness-95 dark:contrast-[70%] dark:invert dark:sepia"
              style={{
                mask: 'radial-gradient(rgba(255, 255, 255, 1) 0%, transparent 80%)',
                WebkitMask: 'radial-gradient(rgba(255, 255, 255, 1) 0%, transparent 80%)',
              }}
            />
          </div>

          <div className="relative w-full">
            <Outlet />
          </div>
        </div>
      </main>
      <footer>
        <p className="text-muted-foreground my-2 mt-6 text-center text-sm">
          Built with{' '}
          <a href="https://documenso.com/" className="text-documenso-700" target="_blank">
            Documenso
          </a>{' '}
          – keeping it open-source and accessible for all{' '}
          <a href="https://github.com/atleaderdotcom/signDocs" target="_blank">
            <FaGithub className="inline" />
          </a>
          .
        </p>
      </footer>
    </>
  );
}
