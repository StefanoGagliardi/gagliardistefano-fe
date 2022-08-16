// Core
import { FC, ReactElement, useState } from 'react';
// third partrs
import cn from 'classnames';

/**
 * Script start
 */
const DevelopmentProcess: FC = (): ReactElement => {
  const [strokeDash, setStrokeDash] = useState<any[]>([]);
  const [activePath, setActivePath] = useState<
    | 'CIRCLE_V2'
    | 'CIRCLE_V2-2'
    | 'CIRCLE_V2-3'
    | 'CIRCLE_V2-4'
    | 'CIRCLE_V2-5'
    | 'CIRCLE_V2-6'
  >('CIRCLE_V2');
  const handleActiveCircle = (pathId) => {
    setActivePath(pathId);
  };

  return (
    <div className="grid grid-cols-12 gap-1 mt-60px">
      <div className="col-start-3 col-span-4 self-center">
        {activePath === 'CIRCLE_V2' && (
          <div
            className="px-20px py-20px bg-white relative z-3 max-w-[90%]"
          >
            <h3 className={cn('text-accent', 'text-lg', 'font-bold', 'mb-2')}>
              Fase 1 - Analisi della tua idea
            </h3>
            <p className={cn('text-paragraph')}>
              Prima fase di analisi ed interviste, con un solo obiettivo:{' '}
              <strong>
                definire quale risultato vuoi raggiungere, e il modo migliore
                per farlo.
              </strong>
            </p>
          </div>
        )}

        {activePath === 'CIRCLE_V2-2' && (
          <div
            className="px-20px py-20px bg-white relative z-3 max-w-[90%]"
          >
            <h3 className={cn('text-accent', 'text-lg', 'font-bold', 'mb-2')}>
              Fase 2 - Creazione Mockup grafico
            </h3>
            <p className={cn('text-paragraph')}>
              Creiamo un{' '}
              <strong>
                mockup che mostri come sarà strutturato a livello grafico e
                funzionale l’e-commerce
              </strong>
              , e te lo presentiamo per avere un tuo ok.
            </p>
          </div>
        )}

        {activePath === 'CIRCLE_V2-3' && (
          <div
            className="px-20px py-20px bg-white relative z-3 max-w-[90%]"
          >
            <h3 className={cn('text-accent', 'text-lg', 'font-bold', 'mb-2')}>
              Fase 3 - Costruzione Prototipo
            </h3>
            <p className={cn('text-paragraph')}>
              Se approvi…<strong> costruiamo un prototipo di e-commerce</strong>{' '}
              personalizzato in base alle tue esigenze/preferenze, sia a livello
              estetico che funzionale.
            </p>
          </div>
        )}

        {activePath === 'CIRCLE_V2-4' && (
          <div
            className="px-20px py-20px bg-white relative z-3 max-w-[90%]"
          >
            <h3 className={cn('text-accent', 'text-lg', 'font-bold', 'mb-2')}>
              Fase 4 - Messa Online
            </h3>
            <p className={cn('text-paragraph')}>
              Dopo aver ricevuto la tua approvazione finale, aver impostato
              correttamente tutti i tecnicismi...
            </p>
            <p className={cn('text-paragraph')}>
              E verificato che tutto funzioni perfettamente con numerosi test…
            </p>
            <p className={cn('text-paragraph')}>
              <strong>L’E-commerce va online.</strong>
            </p>
          </div>
        )}
        {activePath === 'CIRCLE_V2-5' && (
          <div
            className="px-20px py-20px bg-white relative z-3 max-w-[90%]"
          >
            <h3 className={cn('text-accent', 'text-lg', 'font-bold', 'mb-2')}>
              Fase 5 - Promozione
            </h3>
            <p className={cn('text-paragraph')}>
              Dopo la messa online progettiamo la{' '}
              <strong>strategia di marketing giusta</strong> per intercettare un
              gran numero di clienti in target, rendendo attraente ai loro occhi
              il tuo e-Commerce nuovo fiammante.
            </p>
          </div>
        )}
        {activePath === 'CIRCLE_V2-6' && (
          <div
            className="px-20px py-20px bg-white relative z-3 max-w-[90%]"
          >
            <h3 className={cn('text-accent', 'text-lg', 'font-bold', 'mb-2')}>
              Fase 6 - Assistenza e Ottimizzazione
            </h3>
            <p className={cn('text-paragraph')}>
              Continuiamo ad ottimizzare per migliorare le performance
              dell’e-commerce, seguendo i tuoi feedback e quelli dei clienti…
            </p>
            <p className={cn('text-paragraph')}>
              E rimaniamo a completa disposizione finché tu e il tuo team non
              sarete perfettamente in grado di gestire tutte le funzioni del
              sito in autonomia…
            </p>
            <p className={cn('text-paragraph')}>
              Continuiamo ad ottimizzare per migliorare le performance
              dell’e-commerce, seguendo i tuoi feedback e quelli dei cqlienti…
            </p>
          </div>
        )}
      </div>
      <div className="col-span-4">
        <div className={cn('svg_infographics')}>
          {/* <SvgDevStepProcess /> */}
          <svg
            id="devStepProcess"
            data-name="devStepProcess"
            data-id="devStepProcess"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="767.817"
            height="767.817"
            viewBox="0 0 767.817 767.817"
            className={cn('relative', 'z-3')}
          >
            <g id="SVG_PROCESS_FULL" transform="translate(-578.476 -155.122)">
              <g id="CIRCLES_WRAPPER" transform="translate(772.054 169.137)">
                <g id="FASE-1" transform="translate(0 -0.241)">
                  <path
                    id="CIRCLE_V2"
                    d="M114.835,0A114.835,114.835,0,1,1,0,114.835,114.835,114.835,0,0,1,114.835,0Z"
                    transform="matrix(0.883, 0.469, -0.469, 0.883, 137.337, 215.689)"
                    fill="none"
                    stroke="#9880ba"
                    strokeLinecap="round"
                    strokeWidth="45"
                    strokeDasharray={
                      activePath === 'CIRCLE_V2' ? '300 0' : '300 165'
                    }
                    className={cn({
                      'active-circle-path': activePath === 'CIRCLE_V2',
                    })}
                    onClick={(e: React.MouseEvent<SVGPathElement>) => {
                      handleActiveCircle('CIRCLE_V2');
                    }}
                  />
                  <path
                    id="FASE_1_TEXT"
                    d="M7.546,5.132V3.088H1.022V13H3.388V9.15H7.224V7.176H3.388V5.132ZM17.71,13,13.594,3.088H11.27L7.112,13h2.6l.728-1.946H14.28L15.05,13ZM13.622,9.136H11.13l1.26-3.4ZM25.3,4.054A4.956,4.956,0,0,0,22.05,2.836c-1.848,0-3.836.91-3.836,3.108,0,1.792,1.274,2.436,2.534,2.842,1.3.42,2.058.658,2.058,1.414,0,.8-.644,1.078-1.372,1.078a2.932,2.932,0,0,1-2.142-1.05l-1.568,1.6a5.229,5.229,0,0,0,3.71,1.428c1.96,0,3.794-1.022,3.794-3.3,0-1.974-1.736-2.548-3.08-2.982-.938-.294-1.526-.5-1.526-1.162,0-.784.77-.994,1.386-.994a2.4,2.4,0,0,1,1.764.854ZM33.726,13V10.956H29.12V8.9h4.116V6.98H29.12V5.118h4.354V3.088H26.81V13ZM44.1,13V3.088H41.944L38.682,5.482,39.9,7.148,41.748,5.72V13Z"
                    transform="translate(164.946 248.104)"
                    fill="#fff"
                  />
                </g>
                <g id="FASE-2" transform="translate(-1.185 0.063)">
                  <path
                    id="CIRCLE_V2-2"
                    data-name="CIRCLE_V2"
                    d="M162.1,0A162.1,162.1,0,1,1,0,162.1,162.1,162.1,0,0,1,162.1,0Z"
                    transform="translate(-39.032 327.188) rotate(-34)"
                    fill="none"
                    stroke="#9d93b8"
                    strokeLinecap="round"
                    strokeWidth="45"
                    strokeDasharray={
                      activePath === 'CIRCLE_V2-2' ? '600 0' : '600 315'
                    }
                    className={cn({
                      'active-circle-path': activePath === 'CIRCLE_V2-2',
                    })}
                    onClick={(e: React.MouseEvent<SVGPathElement>) => {
                      handleActiveCircle('CIRCLE_V2-2');
                    }}
                  />
                  <path
                    id="FASE_2_TEXT"
                    d="M7.546,5.132V3.088H1.022V13H3.388V9.15H7.224V7.176H3.388V5.132ZM17.71,13,13.594,3.088H11.27L7.112,13h2.6l.728-1.946H14.28L15.05,13ZM13.622,9.136H11.13l1.26-3.4ZM25.3,4.054A4.956,4.956,0,0,0,22.05,2.836c-1.848,0-3.836.91-3.836,3.108,0,1.792,1.274,2.436,2.534,2.842,1.3.42,2.058.658,2.058,1.414,0,.8-.644,1.078-1.372,1.078a2.932,2.932,0,0,1-2.142-1.05l-1.568,1.6a5.229,5.229,0,0,0,3.71,1.428c1.96,0,3.794-1.022,3.794-3.3,0-1.974-1.736-2.548-3.08-2.982-.938-.294-1.526-.5-1.526-1.162,0-.784.77-.994,1.386-.994a2.4,2.4,0,0,1,1.764.854ZM33.726,13V10.956H29.12V8.9h4.116V6.98H29.12V5.118h4.354V3.088H26.81V13Zm12.18,0V10.956H41.86l2.3-2.044A3.978,3.978,0,0,0,45.892,5.86c0-2.072-1.764-3.038-3.584-3.038a3.594,3.594,0,0,0-3.78,3.192l2.254.308c.1-.882.616-1.5,1.4-1.5a1.151,1.151,0,0,1,1.232,1.19A2.088,2.088,0,0,1,42.6,7.54l-3.864,3.5V13Z"
                    transform="translate(166.13 200.8)"
                    fill="#fff"
                  />
                </g>
                <g id="FASE-3">
                  <path
                    id="CIRCLE_V2-3"
                    data-name="CIRCLE_V2"
                    d="M209.035,0C324.482,0,418.07,93.588,418.07,209.035S324.482,418.07,209.035,418.07,0,324.482,0,209.035,93.588,0,209.035,0Z"
                    transform="matrix(0.766, -0.643, 0.643, 0.766, -108.207, 344.937)"
                    fill="none"
                    stroke="#a3a5b2"
                    strokeLinecap="round"
                    strokeWidth="45"
                    strokeDasharray={
                      activePath === 'CIRCLE_V2-3' ? '800 0' : '800 465'
                    }
                    className={cn({
                      'active-circle-path': activePath === 'CIRCLE_V2-3',
                    })}
                    onClick={(e: React.MouseEvent<SVGPathElement>) => {
                      handleActiveCircle('CIRCLE_V2-3');
                    }}
                  />
                  <path
                    id="FASE_3_TEXT"
                    d="M7.546,5.132V3.088H1.022V13H3.388V9.15H7.224V7.176H3.388V5.132ZM17.71,13,13.594,3.088H11.27L7.112,13h2.6l.728-1.946H14.28L15.05,13ZM13.622,9.136H11.13l1.26-3.4ZM25.3,4.054A4.956,4.956,0,0,0,22.05,2.836c-1.848,0-3.836.91-3.836,3.108,0,1.792,1.274,2.436,2.534,2.842,1.3.42,2.058.658,2.058,1.414,0,.8-.644,1.078-1.372,1.078a2.932,2.932,0,0,1-2.142-1.05l-1.568,1.6a5.229,5.229,0,0,0,3.71,1.428c1.96,0,3.794-1.022,3.794-3.3,0-1.974-1.736-2.548-3.08-2.982-.938-.294-1.526-.5-1.526-1.162,0-.784.77-.994,1.386-.994a2.4,2.4,0,0,1,1.764.854ZM33.726,13V10.956H29.12V8.9h4.116V6.98H29.12V5.118h4.354V3.088H26.81V13Zm12.222-2.884a2.383,2.383,0,0,0-1.9-2.3V7.778A2.175,2.175,0,0,0,45.71,5.622c0-1.9-1.736-2.8-3.486-2.8a3.654,3.654,0,0,0-3.7,2.52l2.184.5A1.364,1.364,0,0,1,42.07,4.74a1.132,1.132,0,0,1,1.246,1.092c0,.952-.854,1.176-1.736,1.176h-.686V8.73h.63c.98,0,2.016.294,2.016,1.3a1.286,1.286,0,0,1-1.442,1.26,1.692,1.692,0,0,1-1.68-1.232l-2.184.574a3.8,3.8,0,0,0,3.976,2.632C44.03,13.266,45.948,12.286,45.948,10.116Z"
                    transform="translate(164.946 152.863)"
                    fill="#fff"
                  />
                </g>
                <g id="FASE-4">
                  <path
                    id="CIRCLE_V2-4"
                    data-name="CIRCLE_V2"
                    d="M256.561,0C398.255,0,513.121,114.866,513.121,256.561S398.255,513.121,256.561,513.121,0,398.255,0,256.561,114.866,0,256.561,0Z"
                    transform="translate(-147.398 228.983) rotate(-22)"
                    fill="none"
                    stroke="#aab6a7"
                    strokeLinecap="round"
                    strokeWidth="45"
                    strokeDasharray={
                      activePath === 'CIRCLE_V2-4' ? '900 0' : '900 630'
                    }
                    className={cn({
                      'active-circle-path': activePath === 'CIRCLE_V2-4',
                    })}
                    onClick={(e: React.MouseEvent<SVGPathElement>) => {
                      handleActiveCircle('CIRCLE_V2-4');
                    }}
                  />
                  <path
                    id="FASE_4_TEXT"
                    d="M7.546,5.132V3.088H1.022V13H3.388V9.15H7.224V7.176H3.388V5.132ZM17.71,13,13.594,3.088H11.27L7.112,13h2.6l.728-1.946H14.28L15.05,13ZM13.622,9.136H11.13l1.26-3.4ZM25.3,4.054A4.956,4.956,0,0,0,22.05,2.836c-1.848,0-3.836.91-3.836,3.108,0,1.792,1.274,2.436,2.534,2.842,1.3.42,2.058.658,2.058,1.414,0,.8-.644,1.078-1.372,1.078a2.932,2.932,0,0,1-2.142-1.05l-1.568,1.6a5.229,5.229,0,0,0,3.71,1.428c1.96,0,3.794-1.022,3.794-3.3,0-1.974-1.736-2.548-3.08-2.982-.938-.294-1.526-.5-1.526-1.162,0-.784.77-.994,1.386-.994a2.4,2.4,0,0,1,1.764.854ZM33.726,13V10.956H29.12V8.9h4.116V6.98H29.12V5.118h4.354V3.088H26.81V13Zm12.628-1.932v-1.9H44.982V3.088H42.168L38.136,9.094v1.974H42.8V13H45V11.068Zm-3.542-1.9H40.418L42.77,5.5h.042Z"
                    transform="translate(164.946 108.863)"
                    fill="#fff"
                  />
                </g>
                <g id="FASE-5">
                  <path
                    id="CIRCLE_V2-5"
                    data-name="CIRCLE_V2"
                    d="M304.945,0C473.362,0,609.89,136.529,609.89,304.945S473.362,609.89,304.945,609.89,0,473.362,0,304.945,136.529,0,304.945,0Z"
                    transform="matrix(0.982, 0.191, -0.191, 0.982, -50.826, 12.364)"
                    fill="none"
                    stroke="#b1c697"
                    strokeLinecap="round"
                    strokeWidth="45"
                    strokeDasharray={
                      activePath === 'CIRCLE_V2-5' ? '900 0' : '900 790'
                    }
                    className={cn({
                      'active-circle-path': activePath === 'CIRCLE_V2-5',
                    })}
                    onClick={(e: React.MouseEvent<SVGPathElement>) => {
                      handleActiveCircle('CIRCLE_V2-5');
                    }}
                  />
                  <path
                    id="FASE_5_TEXT"
                    d="M7.546,5.132V3.088H1.022V13H3.388V9.15H7.224V7.176H3.388V5.132ZM17.71,13,13.594,3.088H11.27L7.112,13h2.6l.728-1.946H14.28L15.05,13ZM13.622,9.136H11.13l1.26-3.4ZM25.3,4.054A4.956,4.956,0,0,0,22.05,2.836c-1.848,0-3.836.91-3.836,3.108,0,1.792,1.274,2.436,2.534,2.842,1.3.42,2.058.658,2.058,1.414,0,.8-.644,1.078-1.372,1.078a2.932,2.932,0,0,1-2.142-1.05l-1.568,1.6a5.229,5.229,0,0,0,3.71,1.428c1.96,0,3.794-1.022,3.794-3.3,0-1.974-1.736-2.548-3.08-2.982-.938-.294-1.526-.5-1.526-1.162,0-.784.77-.994,1.386-.994a2.4,2.4,0,0,1,1.764.854ZM33.726,13V10.956H29.12V8.9h4.116V6.98H29.12V5.118h4.354V3.088H26.81V13ZM45.934,9.724c0-2.086-1.6-3.15-3.584-3.15a4.787,4.787,0,0,0-.994.1L41.44,5.1h3.99V3.088H39.354l-.238,5.67a8.181,8.181,0,0,1,2.422-.434c.966,0,2.03.336,2.03,1.512a1.383,1.383,0,0,1-1.484,1.442,1.659,1.659,0,0,1-1.6-1.19l-2.142.658a3.718,3.718,0,0,0,3.766,2.52C44.058,13.266,45.934,12.132,45.934,9.724Z"
                    transform="translate(164.946 58.863)"
                    fill="#fff"
                  />
                </g>
                <g id="FASE-6">
                  <path
                    id="CIRCLE_V2-6"
                    data-name="CIRCLE_V2"
                    d="M353.411,0C548.6,0,706.823,158.228,706.823,353.411S548.6,706.823,353.411,706.823,0,548.6,0,353.411,158.228,0,353.411,0Z"
                    transform="translate(-161.466 16.452)"
                    fill="none"
                    stroke="#bad881"
                    strokeLinecap="round"
                    strokeWidth="45"
                    strokeDasharray={
                      activePath === 'CIRCLE_V2-6' ? '1112 0' : '1112 984'
                    }
                    className={cn({
                      'active-circle-path': activePath === 'CIRCLE_V2-6',
                    })}
                    onClick={(e: React.MouseEvent<SVGPathElement>) => {
                      handleActiveCircle('CIRCLE_V2-6');
                    }}
                  />
                  <path
                    id="FASE_6_TEXT"
                    d="M7.546,5.132V3.088H1.022V13H3.388V9.15H7.224V7.176H3.388V5.132ZM17.71,13,13.594,3.088H11.27L7.112,13h2.6l.728-1.946H14.28L15.05,13ZM13.622,9.136H11.13l1.26-3.4ZM25.3,4.054A4.956,4.956,0,0,0,22.05,2.836c-1.848,0-3.836.91-3.836,3.108,0,1.792,1.274,2.436,2.534,2.842,1.3.42,2.058.658,2.058,1.414,0,.8-.644,1.078-1.372,1.078a2.932,2.932,0,0,1-2.142-1.05l-1.568,1.6a5.229,5.229,0,0,0,3.71,1.428c1.96,0,3.794-1.022,3.794-3.3,0-1.974-1.736-2.548-3.08-2.982-.938-.294-1.526-.5-1.526-1.162,0-.784.77-.994,1.386-.994a2.4,2.4,0,0,1,1.764.854ZM33.726,13V10.956H29.12V8.9h4.116V6.98H29.12V5.118h4.354V3.088H26.81V13ZM46.2,9.668a3.185,3.185,0,0,0-3.248-3.234,2.223,2.223,0,0,0-.7.112l.042-.07L44.73,3.088H41.888l-2.394,3.57a5.294,5.294,0,0,0-1.106,3.066,3.6,3.6,0,0,0,3.906,3.542A3.607,3.607,0,0,0,46.2,9.668Zm-2.352.056a1.492,1.492,0,0,1-1.554,1.582A1.519,1.519,0,0,1,40.74,9.738,1.5,1.5,0,0,1,42.308,8.17,1.481,1.481,0,0,1,43.848,9.724Z"
                    transform="translate(164.946 8.863)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
