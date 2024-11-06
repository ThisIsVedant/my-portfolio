// import Image from '@/components/Image';
// import MainLayout from '@/components/layouts/MainLayout';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { FaGithub, FaPhoneAlt } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';

// export default function About() {
//   return (
//     <div>
//       <MainLayout>
//         <div id="about" className="pt-8 table-fixed">
//           <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
//             <div className="text-center sm:text-left">
//               <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
//                 Vedant Sharma
//               </h1>
//               <h2 className="text-sm font-normal md:text-base">Learning AI</h2>
//               <ul
//                 className="max-sm:ml-1"
//                 style={{
//                   listStyle: 'none',
//                   marginTop: 10,
//                   padding: 0,
//                   display: 'flex',
//                 }}
//               >
//                 <li className="mr-5">
//                   <a
//                     href="https://www.linkedin.com/in/vedant-sharma-4091aa243/"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="linkedin"
//                   >
//                     <AiFillLinkedin className="sm:text-2xl" />
//                   </a>
//                 </li>
//                 <li className="mr-5">
//                   <a
//                     href="https://github.com/ThisIsVedant"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="github"
//                   >
//                     <FaGithub className="sm:text-2xl" />
//                   </a>
//                 </li>

//                 <li className="mr-5">
//                   <a
//                     href="mailto:thisisvedant.2005@gmail.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="email"
//                   >
//                     <SiGmail className="sm:text-2xl" />
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="tel:+919669140191m"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="phone"
//                   >
//                     <FaPhoneAlt className="sm:text-2xl" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <Image
//                 alt="Vedant Sharma"
//                 height={250} //130
//                 width={250} ///130
//                 src={'/static/images/avatar.jpeg'}
//                 className="rounded-lg object-scale-down grayscale"
//               />
//             </div>
//           </div>
//           <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
//             <p>🌱 I’m currently learning AI</p>
//             <p>💬 Ask me about AI, Python and Github</p>
//             <p>📫 How to reach me thisisvedant.2005@gmail.com</p>
//             <p>
//               🌐 I’m skilled in{' '}
//               <a
//                 className="underline-magical"
//                 style={{ textDecoration: 'none' }}
//                 href="https://reactjs.org/"
//               >
//                 React.js
//               </a>{' '}
//               and{' '}
//               <a
//                 className="underline-magical"
//                 style={{ textDecoration: 'none' }}
//                 href="https://nextjs.org/"
//               >
//                 Next.js
//               </a>{' '}
//               for full-stack development.
//             </p>
//             <p>💻 I build scalable web applications with modern frameworks.</p>
//           </div>
//         </div>
//       </MainLayout>
//     </div>
//   );
// }

import Image from '@/components/Image';
import MainLayout from '@/components/layouts/MainLayout';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function About() {
  return (
    <div>
      <MainLayout>
        <div id="about" className="pt-8 table-fixed">
          <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                Vedant Sharma
              </h1>
              <h2 className="text-base font-normal sm:text-lg md:text-xl">
                Learning AI
              </h2>
              <ul
                className="flex justify-center sm:justify-start mt-4"
                style={{
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                <li className="mr-4">
                  <a
                    href="https://www.linkedin.com/in/vedant-sharma-4091aa243/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <AiFillLinkedin className="text-xl sm:text-2xl lg:text-3xl" />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://github.com/ThisIsVedant"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <FaGithub className="text-xl sm:text-2xl lg:text-3xl" />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="mailto:thisisvedant.2005@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="email"
                  >
                    <SiGmail className="text-xl sm:text-2xl lg:text-3xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919669140191m"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="phone"
                  >
                    <FaPhoneAlt className="text-xl sm:text-2xl lg:text-3xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Image
                alt="Vedant Sharma"
                height={250}
                width={250}
                src={'/static/images/avatar.jpeg'}
                className="rounded-lg object-cover grayscale w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72"
              />
            </div>
          </div>
          <div className="prose max-w-none pb-8 text-start sm:text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2 ">
            <p>🌱 I’m currently learning AI</p>
            <p>💬 Ask me about AI, Python, and Github</p>
            <p>📫 How to reach me: thisisvedant.2005@gmail.com</p>
            <p>
              🌐 I’m skilled in{' '}
              <a
                className="underline-magical"
                style={{ textDecoration: 'none' }}
                href="https://reactjs.org/"
              >
                React.js
              </a>{' '}
              and{' '}
              <a
                className="underline-magical"
                style={{ textDecoration: 'none' }}
                href="https://nextjs.org/"
              >
                Next.js
              </a>{' '}
              for full-stack development.
            </p>
            <p>💻 I build scalable web applications with modern frameworks.</p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
