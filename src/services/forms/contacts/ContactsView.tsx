// Import core
import React, { FC, ReactElement } from 'react';

// Import third parts
import cn from 'classnames';

// Import customs
import s from './ContactsView.module.scss';
import { SvgEnvelopeLight, SvgUserLight } from '@assets/svg';

const ContactsForm: FC = (): ReactElement => {
  return (
    <form autoComplete="off" className={s.formWrapper}>
      <div className={cn('mb-4', s.inputGroup)}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Il tuo nome o della tua azienda
        </label>
        <div
          className={cn(
            'flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10 shadow appearance-none border  leading-tight focus:outline-none focus:shadow-outline',
            s.inputIconWrapper
          )}
        >
          <div className="flex justify-center w-15">
            <span className="flex items-center leading-normal bg-white border-0">
              <SvgUserLight className={cn('text-secondary', s.svgInput)} />
            </span>
          </div>
          <input
            type="text"
            className="text-sm flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative outline-none"
            placeholder="Nome o ragione sociale"
            name="name"
            id="name"
          />
        </div>
      </div>
      <div className={cn('mb-4', s.inputGroup)}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Indirizzo email
        </label>
        <div
          className={cn(
            'flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10 shadow appearance-none border  leading-tight focus:outline-none focus:shadow-outline',
            s.inputIconWrapper
          )}
        >
          <div className="flex justify-center w-15">
            <span className="flex items-center leading-normal bg-white border-0">
              <SvgEnvelopeLight className={cn('text-secondary', s.svgInput)} />
            </span>
          </div>
          <input
            type="text"
            className="text-sm flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative outline-none"
            placeholder="Indirizzo ermail"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Motivo del contatto
        </label>
        <textarea
          className="w-full text-sm resize-none px-3 py-3 flex-grow bg-white items-center rounded mb-6 pr-10 shadow appearance-none border  leading-tight focus:outline-none focus:shadow-outline"
          rows={5}
          placeholder="Il tuo messaggio"
          name="message"
          id="message"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Invia messaggio
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
