// Import core
import React, { FC, ReactElement, useRef } from 'react';

// Import third parts
import cn from 'classnames';

// Import customs
import { SvgEnvelopeLight, SvgUserLight } from '@assets/svg';
import Checkbox from '@components/shared/Checkbox';
import url from '@services/url';
import AppLink from '@services/routing/AppLink';

const ContactsForm: FC = (): ReactElement => {
  const checkboxRef = useRef<HTMLInputElement>();

  return (
    <form autoComplete="off" className={cn('base-form', 'theme-form-tag')}>
      <div className={cn('mb-4', 'input-group')}>
        <label
          className={cn(
            'block',
            'text-dark-gray-5',
            'dark:text-light-gray-5',
            'text-sm',
            'font-bold',
            'mb-2'
          )}
          htmlFor="name"
        >
          Il tuo nome o della tua azienda
        </label>
        <div
          className={cn(
            'flex',
            'flex-wrap',
            'w-full',
            'relative h-15',
            'bg-input',
            'items-center',
            'rounded border dark:border-0',
            'mb-6 pr-10',
            'shadow',
            'appearance-none',
            'leading-tight',
            'focus:outline-none focus:shado w-outline',
            'has-icon'
          )}
        >
          <div className="flex justify-center w-15">
            <span className="flex items-center leading-normal bg-input border-0">
              <SvgUserLight className={cn('text-accent')} />
            </span>
          </div>
          <input
            type="text"
            className={cn(
              'flex-shrink flex-grow flex-1 self-center',
              'bg-input',
              'text-sm text-input font-medium',
              'rounded rounded-l-none',
              'border-0 border-grey-light',
              'w-px h-10 px-3',
              'relative',
              'outline-none'
            )}
            placeholder="Nome o ragione sociale"
            name="name"
            id="name"
          />
        </div>
      </div>
      <div className={cn('mb-4', 'input-group')}>
        <label
          className={cn(
            'block',
            'text-dark-gray-5',
            'dark:text-light-gray-5',
            'text-sm',
            'font-bold',
            'mb-2'
          )}
          htmlFor="email"
        >
          Indirizzo email
        </label>
        <div
          className={cn(
            'flex',
            'flex-wrap',
            'w-full',
            'relative h-15',
            'bg-input',
            'items-center',
            'rounded border dark:border-0',
            'mb-6 pr-10',
            'shadow',
            'appearance-none',
            'leading-tight',
            'focus:outline-none',
            'has-icon'
          )}
        >
          <div className="flex justify-center w-15">
            <span className="flex items-center leading-normal bg-input border-0">
              <SvgEnvelopeLight className={cn('text-accent')} />
            </span>
          </div>
          <input
            type="text"
            className={cn(
              'flex-shrink flex-grow flex-1 self-center',
              'bg-input',
              'text-sm text-input font-medium',
              'rounded rounded-l-none',
              'border-0 border-grey-light',
              'w-px h-10 px-3',
              'relative',
              'outline-none'
            )}
            placeholder="Indirizzo ermail"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
      </div>
      <div className={cn('input-group')}>
        <label
          className={cn(
            'block',
            'text-dark-gray-5',
            'dark:text-light-gray-5',
            'text-sm',
            'font-bold',
            'mb-2'
          )}
          htmlFor="message"
        >
          Motivo del contatto
        </label>
        <textarea
          className={cn(
            'w-full resize-none appearance-none',
            'rounded shadow',
            'flex-grow items-center',
            'px-3 py-3 mb-6 pr-10',
            'bg-input text-sm text-input font-medium',
            'focus:outline-none'
          )}
          rows={5}
          placeholder="Il tuo messaggio"
          name="message"
          id="message"
        ></textarea>
      </div>
      <Checkbox
        ref={checkboxRef}
        // containerProps={{
        //   className: 'mb-6',
        // }}
        rootClass={'mb-6 items-start'}
        label={
          <>
            Dichiaro di aver letto, compreso e accetto quanto esposto nell'
            <AppLink
              href={`${url.privacyPolicy()}`}
              className={'underline'}
              useCursorHandler={true}
            >
              informativa
            </AppLink>{' '}
            sul trattamento dei dati.
          </>
        }
      />
      <div className="flex items-center justify-between">
        <button
          className="btn btn-components-outline py-2 px-4 rounded"
          type="button"
        >
          Invia messaggio
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
