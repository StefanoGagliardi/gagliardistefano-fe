import { FC, ReactElement } from 'react';
import cn from 'classnames';
import s from './ContactsSection.module.scss';
import {
  SvgDuoEnvelope,
  SvgDuoMapPin,
  SvgDuoPhone,
  SvgGithub,
  SvgLinkedin,
  SvgTwitter,
} from '@assets/svg';
import AppLink from '@services/routing/AppLink';
import ContactsForm from '@services/forms/contacts/ContactsView';

const ContactsSection: FC = (): ReactElement => {
  // const {register} = useForm();

  return (
    <section className={s.contactsSection}>
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="flex justify-between flex-col">
            <div className={s.colHead}>
              <h1 className={cn('text-white text-xl block font-bold mb-3')}>
                Get a quote
              </h1>
              <p className={cn('text-white text-lg block font-medium my-0 opacity-80')}>
                Fill our form and our team will
                <br />
                get back to you within 24 hours.
              </p>
            </div>
            <div className={s.colBody}>
              <ul className={s.contactsBoxes}>
                <li>
                  <AppLink href={'tel:+393470064005'} label="Call me!">
                    <>
                      <SvgDuoPhone />
                      <span>+39 3470064005</span>
                    </>
                  </AppLink>
                </li>
                <li>
                  <AppLink
                    href={'mailto:stefano.gagliardi@sitisrl.it'}
                    label="Call me!"
                  >
                    <>
                      <SvgDuoEnvelope />
                      <span>stefano.gagliardi@sitisrl.it</span>
                    </>
                  </AppLink>
                </li>
                <li>
                  <AppLink href={'#'} label="Scopri il team">
                    <>
                      <SvgDuoMapPin />
                      <span>
                        Il team è interamente nel Cloud.
                        <br /> Utilizziamo uffici popup per poterci incontrare.
                      </span>
                    </>
                  </AppLink>
                </li>
              </ul>
            </div>
            <div className={s.colFoot}>
              <ul>
                <li>
                  <AppLink href={'https://linkedin.com'} label="Vai a Linkedin">
                    <SvgLinkedin />
                  </AppLink>
                </li>
                <li>
                  <AppLink href={'https://github.com'} label="Vai a Github">
                    <SvgGithub />
                  </AppLink>
                </li>
                <li>
                  <AppLink href={'https://twitter.com'} label="Vai a Twitter">
                    <SvgTwitter />
                  </AppLink>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
          <div className="col-span-1">
            <div
              className={cn('bg-white shadow-md rounded px-8 pt-6', s.formBox)}
            >
              <div className="">
                <ContactsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
