// Import core
import React, { FC, ReactElement, useRef, Children } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Flipped } from 'react-flip-toolkit';

// Import third parts

// Import custom
import FadeContents from './FadeContents';
import s from './DropdownContainer.module.scss';

interface Props {
  duration: number;
  direction: string;
  animatingOut: boolean;
  children: any;
}

export const DropdownContainer: FC<Props> = (props: Props): ReactElement => {
  const { duration, direction, animatingOut, children } = props;
  const [currentDropdown, prevDropdown] = Children.toArray(children);

  const altBackgroundEl = useRef<any>(null);
  const currentDropdownEl = useRef<any>(null);
  const prevDropdownEl = useRef<any>(null);

  return (
    <DropdownRoot
      direction={direction}
      duration={duration}
      animatingOut={animatingOut}
    >
      <Flipped flipId="dropdown-caret">
        <div className={s.caret}></div>
      </Flipped>
      <Flipped flipId="dropdown">
        <div className={s.dropdownBackground}>
          <Flipped inverseFlipId="dropdown">
            <InvertedDiv>
              <AltBackground ref={altBackgroundEl} duration={duration} />
              <FadeContents
                direction={direction}
                duration={duration}
                ref={currentDropdownEl}
              >
                {currentDropdown}
              </FadeContents>
            </InvertedDiv>
          </Flipped>

          <Flipped inverseFlipId="dropdown" scale>
            <InvertedDiv absolute>
              {prevDropdown && (
                <FadeContents
                  animatingOut
                  direction={direction}
                  duration={duration}
                  ref={prevDropdownEl}
                >
                  {prevDropdown}
                </FadeContents>
              )}
            </InvertedDiv>
          </Flipped>
        </div>
      </Flipped>
    </DropdownRoot>
  );
};

export const promoteLayer = css`
  will-change: transform;
`;

const getDropdownRootKeyFrame = ({ animatingOut, direction }) => {
  if (!animatingOut && direction) return null;
  return keyframes`
  from {
    transform: ${animatingOut ? 'rotateX(0)' : 'rotateX(-15deg)'};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? 'rotateX(-15deg)' : 'rotateX(0)'};
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};
``;
export const DropdownRoot = styled.div<Omit<Props, 'children'>>`
  transform-origin: 0 0;
  ${promoteLayer}
  animation-name: ${getDropdownRootKeyFrame};
  animation-duration: ${(props) => props.duration}ms;
  /* use 'forwards' to prevent flicker on leave animation */
  animation-fill-mode: forwards;
  /* flex styles will center the caret child component */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
`;

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  // background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1);
  background: #fff;
  ${promoteLayer}// backdrop-filter: blur(4px);
  // -webkit-backdrop-filter: blur(4px);
  // background: hsla(0, 0%, 100%, 0.25);
  // box-shadow: 0 8px 32px 0px rgb(70 70 70 / 37%);
`;

export const AltBackground = styled.div<{ duration: any }>`
  background-color: var(--grey);
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform ${(props) => props.duration}ms;
`;

export const InvertedDiv = styled.div<{ absolute?: any }>`
  ${promoteLayer}
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`;

export default DropdownContainer;
