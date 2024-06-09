import Icon, { IconProps, CircleStyle, EllipseStyle, PathStyle, RectStyle } from '../elements/Icon';

function useWithIcon(
  arrayOfPathProps: any[],
  iconProps: {
    fill?: string;
    useStroke?: boolean;
    viewBox?: string;
  } = {},
  opts?: {
    withoutBaseIcon?: boolean;
  },
) {
  return (props: IconProps) => {
    const arr = arrayOfPathProps.map(({ Style, ...pathProps }, idx: number) => {
      const itemProps = {
        ...props,
        ...pathProps,
      };

      return Style ? (
        <Style useStroke={iconProps?.useStroke} {...itemProps} key={idx} />
      ) : (
        <PathStyle useStroke={iconProps?.useStroke} {...itemProps} key={idx} />
      );
    });

    if (opts?.withoutBaseIcon) {
      return <>{arr}</>;
    }

    return (
      <Icon {...props} {...iconProps}>
        {arr}
      </Icon>
    );
  };
}

export const Locked = useWithIcon(
  [
    {
      d: 'M12.8991 14.2355C12.8991 13.7384 12.4962 13.3355 11.9991 13.3355C11.502 13.3355 11.0991 13.7384 11.0991 14.2355V16.7129C11.0991 17.21 11.502 17.6129 11.9991 17.6129C12.4962 17.6129 12.8991 17.21 12.8991 16.7129V14.2355Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M6.76407 7.7613V5.56446C6.76407 2.67299 9.10808 0.328979 11.9996 0.328979C14.891 0.328979 17.235 2.67298 17.235 5.56446V7.7613H17.5733C19.7807 7.7613 21.5701 9.55073 21.5701 11.7581V19.1903C21.5701 21.3977 19.7806 23.1871 17.5733 23.1871H6.42491C4.21755 23.1871 2.42813 21.3977 2.42813 19.1903V11.7581C2.42813 9.55072 4.21755 7.7613 6.42491 7.7613H6.76407ZM8.56407 5.56446C8.56407 3.6671 10.1022 2.12898 11.9996 2.12898C13.8969 2.12898 15.435 3.6671 15.435 5.56446V7.7613H8.56407V5.56446ZM4.22813 11.7581C4.22813 10.5448 5.21166 9.5613 6.42491 9.5613H17.5733C18.7865 9.5613 19.7701 10.5448 19.7701 11.7581V19.1903C19.7701 20.4036 18.7865 21.3871 17.5733 21.3871H6.42491C5.21166 21.3871 4.22813 20.4036 4.22813 19.1903V11.7581Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Visible = useWithIcon(
  [
    {
      d: 'M12 16.8C14.651 16.8 16.8 14.6509 16.8 12C16.8 9.34901 14.651 7.19998 12 7.19998C9.34902 7.19998 7.19999 9.34901 7.19999 12C7.19999 14.6509 9.34902 16.8 12 16.8ZM12 15C13.6568 15 15 13.6568 15 12C15 10.3431 13.6568 8.99998 12 8.99998C10.3431 8.99998 8.99999 10.3431 8.99999 12C8.99999 13.6568 10.3431 15 12 15Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M0.299988 12C0.299978 12.0774 0.310026 12.1535 0.329224 12.2269C0.332006 12.2375 0.33499 12.2482 0.338181 12.2588C3.80895 23.8281 20.1915 23.8281 23.6623 12.2588C23.6656 12.2476 23.6688 12.2364 23.6717 12.2252C23.6845 12.1759 23.6931 12.1253 23.6974 12.0739C23.7004 12.0378 23.7012 12.0014 23.6998 11.9647C23.6968 11.8905 23.6846 11.8155 23.6623 11.7411C20.1915 0.171903 3.80895 0.171903 0.338181 11.7411C0.33499 11.7518 0.332005 11.7624 0.329224 11.7731C0.310026 11.8464 0.299978 11.9226 0.299988 12ZM2.14302 12C5.23739 2.48562 18.7631 2.48562 21.8574 12C18.7631 21.5143 5.23739 21.5143 2.14302 12Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Dark = useWithIcon(
  [
    {
      d: 'M2.80004 12C2.80004 17.7438 7.45628 22.4 13.2 22.4C15.5364 22.4 17.6911 21.6308 19.4274 20.3304C17.9107 20.2533 16.0246 19.9433 14.3754 19.0165C13.3327 18.4306 12.3737 17.5915 11.6809 16.4096C10.9881 15.2276 10.6 13.7682 10.6 12C10.6 10.2319 10.9881 8.77241 11.6809 7.5904C12.3737 6.40856 13.3327 5.5695 14.3754 4.98358C16.0246 4.05675 17.9107 3.7467 19.4274 3.66965C17.6911 2.36925 15.5364 1.60002 13.2 1.60002C7.45628 1.60002 2.80004 6.25626 2.80004 12ZM20.4413 19.1509C17.3549 19.182 11.8 18.3552 11.8 12C11.8 5.64483 17.3549 4.81802 20.4413 4.84913C21.1658 4.85643 21.6295 3.9984 21.099 3.50489C19.028 1.57838 16.2516 0.400024 13.2 0.400024C6.79353 0.400024 1.60004 5.59352 1.60004 12C1.60004 18.4065 6.79353 23.6 13.2 23.6C16.2516 23.6 19.028 22.4217 21.099 20.4952C21.6295 20.0016 21.1658 19.1436 20.4413 19.1509Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Hidden = useWithIcon(
  [
    {
      d: 'M0.941398 8.7379C1.41749 8.59507 1.91923 8.86524 2.06205 9.34133C5.01971 19.2002 18.9803 19.2002 21.938 9.34133C22.0808 8.86524 22.5825 8.59507 23.0586 8.7379C23.5347 8.88073 23.8049 9.38246 23.6621 9.85856C20.1913 21.4278 3.80873 21.4278 0.337967 9.85856C0.195139 9.38246 0.465304 8.88073 0.941398 8.7379Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    viewBox: '0 0 24 24',
  },
);

export const Expired = useWithIcon(
  [
    {
      d: 'M12.0502 14.7738L12.4681 16.4455C12.5485 16.7669 12.8742 16.9624 13.1957 16.882C13.5172 16.8017 13.7127 16.4759 13.6323 16.1544L13.1174 14.0947C12.8396 12.9838 11.2608 12.9838 10.983 14.0947L10.4681 16.1544C10.3877 16.4759 10.5832 16.8017 10.9047 16.882C11.2262 16.9624 11.5519 16.7669 11.6323 16.4455L12.0502 14.7738Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12.0502 3.39995C11.1322 3.39995 10.3231 3.51137 9.61092 3.69704C7.72524 4.18863 6.50158 5.56366 5.68926 7.41891C4.8718 9.2859 4.5034 11.5733 4.31219 13.7404C4.22925 14.6805 4.65255 15.5937 5.42351 16.1379L7.72289 17.761C8.14761 18.0608 8.4002 18.5482 8.4002 19.0681V21.5499C8.4002 21.7709 8.57928 21.9499 8.8002 21.9499H9.9502V19.5499C9.9502 19.2186 10.2188 18.9499 10.5502 18.9499C10.8816 18.9499 11.1502 19.2186 11.1502 19.5499V21.9499H12.7002V19.5499C12.7002 19.2186 12.9688 18.9499 13.3002 18.9499C13.6316 18.9499 13.9002 19.2186 13.9002 19.5499V21.9499H15.0502C15.2711 21.9499 15.4502 21.7709 15.4502 21.5499V19.0681C15.4502 18.5482 15.7028 18.0608 16.1275 17.761L17.9094 16.5032C19.0007 15.7328 19.5999 14.4401 19.4825 13.1094C19.3076 11.1269 19.0186 9.05596 18.328 7.34212C17.6426 5.6413 16.5908 4.35869 14.9145 3.82117C14.1064 3.56206 13.1575 3.39995 12.0502 3.39995ZM9.30821 2.53585C10.123 2.32344 11.034 2.19995 12.0502 2.19995C13.2764 2.19995 14.3493 2.37975 15.2809 2.67847C17.4106 3.36137 18.6745 4.99145 19.441 6.89359C20.2023 8.78272 20.5015 11.005 20.6779 13.004C20.8329 14.7604 20.0419 16.4667 18.6014 17.4835L16.8195 18.7413C16.7133 18.8163 16.6502 18.9381 16.6502 19.0681V21.5499C16.6502 22.4336 15.9339 23.15 15.0502 23.15H8.8002C7.91654 23.15 7.2002 22.4336 7.2002 21.5499V19.0681C7.2002 18.9381 7.13705 18.8163 7.03087 18.7413L4.73149 17.1182C3.61135 16.3275 2.99632 15.0008 3.11683 13.635C3.31123 11.4318 3.69268 8.98699 4.59001 6.9376C5.49247 4.87647 6.94853 3.15101 9.30821 2.53585Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M8.3002 10.7C8.63157 10.7 8.9002 10.9686 8.9002 11.3V12.8C8.9002 13.1313 8.63157 13.4 8.3002 13.4C7.96882 13.4 7.7002 13.1313 7.7002 12.8V11.3C7.7002 10.9686 7.96882 10.7 8.3002 10.7ZM16.0502 10.7C16.3816 10.7 16.6502 10.9686 16.6502 11.3V12.8C16.6502 13.1313 16.3816 13.4 16.0502 13.4C15.7188 13.4 15.4502 13.1313 15.4502 12.8V11.3C15.4502 10.9686 15.7188 10.7 16.0502 10.7Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M8.47446 6.37569C8.24014 6.14137 7.86025 6.14137 7.62593 6.37569C7.30976 6.69186 7.08498 7.07248 6.93941 7.40002C6.80307 7.70678 6.7002 8.04886 6.7002 8.29995C6.7002 8.63132 6.96883 8.89995 7.3002 8.89995C7.63157 8.89995 7.9002 8.63132 7.9002 8.29995C7.90234 8.28681 7.92769 8.13104 8.03598 7.88738C8.14041 7.65242 8.29063 7.40804 8.47446 7.22422C8.70877 6.9899 8.70877 6.61 8.47446 6.37569Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M15.6259 6.37569C15.8602 6.14137 16.2401 6.14137 16.4745 6.37569C16.7906 6.69186 17.0154 7.07248 17.161 7.40002C17.2973 7.70678 17.4002 8.04886 17.4002 8.29995C17.4002 8.63132 17.1316 8.89995 16.8002 8.89995C16.4688 8.89995 16.2002 8.63132 16.2002 8.29995C16.1981 8.28681 16.1727 8.13104 16.0644 7.88738C15.96 7.65242 15.8098 7.40804 15.6259 7.22422C15.3916 6.9899 15.3916 6.61 15.6259 6.37569Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M1.8202 3.68995C2.01902 3.42485 2.3951 3.37113 2.6602 3.56995L3.6602 4.31995C3.92529 4.51877 3.97902 4.89485 3.7802 5.15995C3.58137 5.42505 3.20529 5.47877 2.9402 5.27995L1.9402 4.52995C1.6751 4.33113 1.62137 3.95505 1.8202 3.68995ZM0.200195 10.05C0.200195 9.71858 0.468824 9.44995 0.800195 9.44995H1.5502C1.88157 9.44995 2.1502 9.71858 2.1502 10.05C2.1502 10.3813 1.88157 10.65 1.5502 10.65H0.800195C0.468824 10.65 0.200195 10.3813 0.200195 10.05Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M22.0302 3.68995C21.8314 3.42485 21.4553 3.37113 21.1902 3.56995L20.1902 4.31995C19.9251 4.51877 19.8714 4.89485 20.0702 5.15995C20.269 5.42505 20.6451 5.47877 20.9102 5.27995L21.9102 4.52995C22.1753 4.33113 22.229 3.95505 22.0302 3.68995ZM23.6502 10.05C23.6502 9.71858 23.3816 9.44995 23.0502 9.44995H22.3002C21.9688 9.44995 21.7002 9.71858 21.7002 10.05C21.7002 10.3813 21.9688 10.65 22.3002 10.65H23.0502C23.3816 10.65 23.6502 10.3813 23.6502 10.05Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    viewBox: '0 0 24 24',
  },
);

export const Powerups = useWithIcon(
  [
    {
      d: 'M1.93946 4.06087C1.35364 3.47505 1.35364 2.52525 1.93946 1.93943C2.52528 1.35361 3.47508 1.35361 4.0609 1.93943L7.06107 4.93959C7.64688 5.52541 7.64688 6.47521 7.06107 7.06104C6.47525 7.64685 5.52544 7.64685 4.93963 7.06104L1.93946 4.06087Z',
    },
    {
      d: 'M38.0628 1.93943C38.6486 2.52525 38.6486 3.47505 38.0628 4.06087L35.0626 7.06104C34.4768 7.64685 33.527 7.64685 32.9412 7.06104C32.3554 6.47521 32.3554 5.52541 32.9412 4.93959L35.9414 1.93943C36.5272 1.35361 37.477 1.35361 38.0628 1.93943Z',
    },
    {
      d: 'M16.7866 4.67253C18.0015 1.8515 22.0013 1.85151 23.2161 4.67254L25.7765 10.618C25.8489 10.7861 26.0074 10.9012 26.1896 10.9181L32.6353 11.5159C35.6936 11.7996 36.9296 15.6036 34.6221 17.6308L29.7588 21.9031C29.6213 22.0239 29.5608 22.2102 29.6011 22.3887L31.0243 28.7036C31.6996 31.7 28.4637 34.051 25.8227 32.4828L20.2567 29.1778C20.0993 29.0844 19.9034 29.0844 19.7461 29.1778L14.18 32.4828C11.539 34.051 8.30309 31.7 8.97841 28.7036L10.4017 22.3887C10.4419 22.2102 10.3814 22.0239 10.2439 21.9031L5.38062 17.6308C3.07307 15.6036 4.30909 11.7996 7.36746 11.5159L13.8131 10.9181C13.9954 10.9012 14.1538 10.7861 14.2262 10.618L16.7866 4.67253ZM20.4606 5.85918C20.2871 5.45618 19.7157 5.45618 19.5421 5.85918L16.9817 11.8046C16.475 12.9813 15.3659 13.7871 14.0902 13.9055L7.64453 14.5033C7.20761 14.5438 7.03105 15.0872 7.36069 15.3768L12.224 19.6492C13.1865 20.4947 13.6101 21.7985 13.3284 23.0483L11.9052 29.3633C11.8087 29.7913 12.271 30.1272 12.6483 29.9032L18.2143 26.5981C19.3159 25.944 20.6868 25.944 21.7884 26.5981L27.3545 29.9032C27.7318 30.1272 28.194 29.7913 28.0976 29.3633L26.6743 23.0483C26.3926 21.7985 26.8163 20.4947 27.7788 19.6492L32.642 15.3768C32.9717 15.0872 32.7951 14.5438 32.3582 14.5033L25.9125 13.9055C24.6368 13.7871 23.5277 12.9813 23.021 11.8046L20.4606 5.85918Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M38.0628 39.0628C38.6486 38.477 38.6486 37.5272 38.0628 36.9414L35.0626 33.9412C34.4768 33.3554 33.527 33.3554 32.9412 33.9412C32.3554 34.5271 32.3554 35.4768 32.9412 36.0627L35.9414 39.0628C36.5272 39.6487 37.477 39.6487 38.0628 39.0628Z',
    },
    {
      d: 'M1.93946 36.9414C1.35364 37.5272 1.35364 38.477 1.93946 39.0628C2.52528 39.6487 3.47508 39.6487 4.0609 39.0628L7.06107 36.0627C7.64688 35.4768 7.64688 34.5271 7.06107 33.9412C6.47525 33.3554 5.52544 33.3554 4.93963 33.9412L1.93946 36.9414Z',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 40 40',
  },
);

export const Close = useWithIcon(
  [
    {
      d: 'M21.2251 4.23635C21.5765 3.88488 21.5765 3.31503 21.2251 2.96356C20.8736 2.61208 20.3037 2.61208 19.9523 2.96356L12.0944 10.8214L4.23653 2.96357C3.88506 2.61209 3.31521 2.61209 2.96374 2.96357C2.61227 3.31504 2.61227 3.88489 2.96374 4.23636L10.8216 12.0942L2.96472 19.9511C2.61325 20.3026 2.61325 20.8724 2.96472 21.2239C3.31619 21.5754 3.88604 21.5754 4.23751 21.2239L12.0944 13.367L19.9513 21.2239C20.3028 21.5754 20.8726 21.5754 21.2241 21.2239C21.5756 20.8724 21.5756 20.3026 21.2241 19.9511L13.3672 12.0942L21.2251 4.23635Z',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const UpTriangle = useWithIcon(
  [
    {
      d: 'M13.0176 7.62821L16.8525 13.7641C17.352 14.5633 16.7774 15.6001 15.8349 15.6001H8.16508C7.22256 15.6001 6.64795 14.5633 7.14749 13.7641L10.9824 7.62821C11.4524 6.87621 12.5476 6.87621 13.0176 7.62821Z',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const CaretRight = useWithIcon(
  [
    {
      d: 'M7.72269 3.00737C8.05001 2.6333 8.61859 2.59539 8.99267 2.92271L15.4964 8.61343C17.5453 10.4063 17.5453 13.5938 15.4964 15.3866L8.99267 21.0773C8.61859 21.4047 8.05001 21.3668 7.72269 20.9927C7.39538 20.6186 7.43329 20.05 7.80736 19.7227L14.311 14.032C15.5404 12.9563 15.5404 11.0438 14.311 9.96807L7.80736 4.27734C7.43329 3.95003 7.39538 3.38144 7.72269 3.00737Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Quickstart = useWithIcon(
  [
    {
      d: 'M12.6 0.799997C12.6 0.468626 12.3314 0.199997 12 0.199997C11.6686 0.199997 11.4 0.468626 11.4 0.799997V1.4C11.4 1.73137 11.6686 2 12 2C12.3314 2 12.6 1.73137 12.6 1.4V0.799997Z',
    },
    {
      d: 'M12 4.2C8.79674 4.2 6.2 6.79675 6.2 10C6.2 12.4908 7.77042 14.6164 9.97718 15.4377C10.2877 15.5533 10.4458 15.8987 10.3302 16.2093C10.2146 16.5198 9.86919 16.6779 9.55863 16.5623C6.89734 15.5719 5 13.0083 5 10C5 6.13401 8.134 3 12 3C15.866 3 19 6.13401 19 10C19 13.0083 17.1026 15.5719 14.4414 16.5623C14.1308 16.6779 13.7853 16.5198 13.6698 16.2093C13.5542 15.8987 13.7123 15.5533 14.0228 15.4377C16.2296 14.6164 17.8 12.4908 17.8 10C17.8 6.79675 15.2032 4.2 12 4.2Z',
    },
    {
      d: 'M9.40001 10C9.40001 8.56406 10.5641 7.4 12 7.4C13.4359 7.4 14.6 8.56406 14.6 10C14.6 10.7765 14.2604 11.4729 13.7196 11.9502C13.4712 12.1694 13.4475 12.5486 13.6668 12.797C13.8861 13.0455 14.2653 13.0691 14.5137 12.8498C15.3016 12.1544 15.8 11.135 15.8 10C15.8 7.90131 14.0987 6.2 12 6.2C9.90133 6.2 8.20001 7.90131 8.20001 10C8.20001 11.135 8.6984 12.1544 9.48631 12.8498C9.73475 13.0691 10.1139 13.0455 10.3332 12.797C10.5525 12.5486 10.5288 12.1694 10.2804 11.9502C9.73962 11.4729 9.40001 10.7765 9.40001 10Z',
    },
    {
      d: 'M12.6 10.4C12.6 10.0686 12.3314 9.8 12 9.8C11.6686 9.8 11.4 10.0686 11.4 10.4V23C11.4 23.3314 11.6686 23.6 12 23.6C12.3314 23.6 12.6 23.3314 12.6 23V10.4Z',
    },
    {
      d: 'M5.14096 3.04136C5.37528 2.80704 5.75518 2.80704 5.98949 3.04136L6.41376 3.46562C6.64807 3.69994 6.64807 4.07984 6.41376 4.31415C6.17944 4.54846 5.79954 4.54846 5.56523 4.31415L5.14096 3.88989C4.90665 3.65557 4.90665 3.27567 5.14096 3.04136Z',
    },
    {
      d: 'M18.4346 15.4859C18.2003 15.2516 17.8204 15.2516 17.5861 15.4859C17.3518 15.7202 17.3518 16.1001 17.5861 16.3344L18.0104 16.7587C18.2447 16.993 18.6246 16.993 18.8589 16.7587C19.0932 16.5244 19.0932 16.1445 18.8589 15.9102L18.4346 15.4859Z',
    },
    {
      d: 'M21.3692 7.38924C21.455 7.70932 21.265 8.03832 20.945 8.12409L20.3654 8.27938C20.0453 8.36514 19.7163 8.17519 19.6305 7.85511C19.5448 7.53503 19.7347 7.20603 20.0548 7.12027L20.6344 6.96498C20.9544 6.87921 21.2834 7.06916 21.3692 7.38924Z',
    },
    {
      d: 'M3.94513 12.6796C4.26521 12.5938 4.45516 12.2648 4.3694 11.9447C4.28363 11.6246 3.95463 11.4347 3.63455 11.5204L3.055 11.6757C2.73492 11.7615 2.54497 12.0905 2.63073 12.4106C2.7165 12.7307 3.0455 12.9206 3.36558 12.8348L3.94513 12.6796Z',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const CaretLeft = useWithIcon(
  [
    {
      d: 'M16.2772 3.00737C16.6045 3.38144 16.5666 3.95003 16.1925 4.27734L9.68883 9.96807C8.45945 11.0438 8.45945 12.9563 9.68884 14.032L16.1925 19.7227C16.5666 20.05 16.6045 20.6186 16.2772 20.9927C15.9499 21.3668 15.3813 21.4047 15.0072 21.0773L8.50353 15.3866C6.45456 13.5938 6.45455 10.4063 8.50352 8.61343L15.0072 2.92271C15.3813 2.59539 15.9499 2.6333 16.2772 3.00737Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    viewBox: '0 0 24 24',
  },
);

export const CaretUp = useWithIcon(
  [
    {
      d: 'M14.032 10.889C12.9563 9.65959 11.0438 9.65958 9.96807 10.889L4.27734 17.3927C3.95003 17.7667 3.38144 17.8046 3.00737 17.4773C2.6333 17.15 2.59539 16.5814 2.92271 16.2073L8.61343 9.70366C10.4063 7.65469 13.5938 7.65469 15.3866 9.70366L21.0773 16.2073C21.4047 16.5814 21.3668 17.15 20.9927 17.4773C20.6186 17.8046 20.05 17.7667 19.7227 17.3927L14.032 10.889Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    viewBox: '0 0 24 24',
  },
);

export const RightUp = useWithIcon(
  [
    {
      d: 'M19.1249 3.67499C19.6219 3.67499 20.0249 4.07793 20.0249 4.57499V16.4544C20.0249 16.9514 19.6219 17.3544 19.1249 17.3544C18.6278 17.3544 18.2249 16.9514 18.2249 16.4544L18.2249 6.74778L4.91204 20.0606C4.56056 20.4121 3.99072 20.4121 3.63925 20.0606C3.28777 19.7092 3.28777 19.1393 3.63924 18.7878L16.9521 5.47499L7.24549 5.47499C6.74844 5.47499 6.34549 5.07204 6.34549 4.57499C6.34549 4.07793 6.74843 3.67499 7.24549 3.67499L19.1249 3.67499Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    viewBox: '0 0 24 24',
  },
);

export const DownTriangle = useWithIcon(
  [
    {
      d: 'M10.9823 16.3719L7.14739 10.2361C6.64786 9.43681 7.22247 8.40007 8.16499 8.40007H15.8348C16.7773 8.40007 17.3519 9.43681 16.8524 10.2361L13.0175 16.3719C12.5475 17.1239 11.4523 17.1239 10.9823 16.3719Z',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const CaretDown = useWithIcon(
  [
    {
      d: 'M3.00737 8.92271C3.38144 8.59539 3.95003 8.6333 4.27734 9.00737L9.96807 15.5111C11.0438 16.7404 12.9563 16.7404 14.032 15.5111L19.7227 9.00737C20.05 8.6333 20.6186 8.59539 20.9927 8.92271C21.3668 9.25002 21.4047 9.81861 21.0773 10.1927L15.3866 16.6964C13.5938 18.7453 10.4063 18.7453 8.61343 16.6964L2.92271 10.1927C2.59539 9.81861 2.6333 9.25002 3.00737 8.92271Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Trigger = useWithIcon(
  [
    {
      d: 'M14.9668 4.18453C16.3162 1.90099 18.7714 0.5 21.4238 0.5H28.4676C31.1882 0.5 32.8686 3.4679 31.4689 5.80074L25.6493 15.5H31.4127C33.7114 15.5 34.9586 18.1893 33.4738 19.944L17.7139 38.5694C15.5805 41.0907 11.5089 38.9721 12.3494 35.7781L15.0542 25.5H8.50491C5.79486 25.5 4.11298 22.5526 5.49166 20.2195L14.9668 4.18453ZM21.4238 3.5C19.8323 3.5 18.3592 4.34059 17.5496 5.71072L8.07444 21.7456C7.87749 22.0789 8.11775 22.5 8.50491 22.5H15.4434C17.2137 22.5 18.505 24.1751 18.0545 25.8871L15.2507 36.5416C15.2401 36.5816 15.242 36.6004 15.2422 36.6025C15.2424 36.6047 15.2425 36.605 15.2428 36.6054L15.2429 36.6057C15.2449 36.6098 15.2603 36.6344 15.3012 36.6557C15.3422 36.677 15.3711 36.6755 15.3757 36.6748L15.376 36.6747C15.3764 36.6747 15.3767 36.6746 15.3787 36.6735C15.3805 36.6725 15.397 36.6632 15.4237 36.6316L30.7659 18.5H25.1194C23.0207 18.5 21.7244 16.2105 22.8042 14.4109L28.8964 4.25725C29.0963 3.92399 28.8563 3.5 28.4676 3.5H21.4238Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    viewBox: '0 0 40 40',
  },
);

export const Cluster = useWithIcon(
  [
    {
      d: 'M21.1923 6.69285L12 1.38567L2.80767 6.69285V17.3072L12 22.6144L21.1923 17.3072V6.69285ZM12.6 0.346438C12.2287 0.132079 11.7713 0.132079 11.4 0.346438L2.20767 5.65362C1.83638 5.86798 1.60767 6.26413 1.60767 6.69285V17.3072C1.60767 17.7359 1.83638 18.1321 2.20767 18.3464L11.4 23.6536C11.7713 23.868 12.2287 23.868 12.6 23.6536L21.7923 18.3464C22.1636 18.1321 22.3923 17.7359 22.3923 17.3072V6.69285C22.3923 6.26413 22.1636 5.86798 21.7923 5.65362L12.6 0.346438Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12 11.2C12.3313 11.2 12.6 11.4687 12.6 11.8V23C12.6 23.3314 12.3313 23.6 12 23.6C11.6686 23.6 11.4 23.3314 11.4 23V11.8C11.4 11.4687 11.6686 11.2 12 11.2Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M14.1927 11.0602C14.3584 10.7732 14.26 10.4063 13.9731 10.2406L4.61999 4.84057C4.33302 4.67488 3.96606 4.77321 3.80038 5.06018C3.63469 5.34716 3.73302 5.71411 4.01999 5.8798L13.3731 11.2798C13.66 11.4455 14.027 11.3472 14.1927 11.0602Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M16.0195 9.76018C16.1852 9.47321 16.0869 9.10625 15.7999 8.94057L6.62 3.64057C6.33303 3.47488 5.96607 3.57321 5.80039 3.86018C5.6347 4.14716 5.73303 4.51411 6.02 4.6798L15.1999 9.9798C15.4869 10.1455 15.8538 10.0472 16.0195 9.76018Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M18.0195 8.56018C18.1852 8.27321 18.0869 7.90625 17.7999 7.74057L8.62 2.44057C8.33303 2.27488 7.96607 2.37321 7.80039 2.66018C7.6347 2.94716 7.73303 3.31411 8.02 3.4798L17.1999 8.7798C17.4869 8.94549 17.8538 8.84716 18.0195 8.56018Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M20.4195 7.76018C20.5852 7.47321 20.4869 7.10625 20.1999 6.94057L11.02 1.64057C10.733 1.47488 10.3661 1.57321 10.2004 1.86018C10.0347 2.14716 10.133 2.51411 10.42 2.6798L19.5999 7.9798C19.8869 8.14548 20.2538 8.04716 20.4195 7.76018Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12.4961 1.77459C12.1887 1.59891 11.8113 1.59891 11.5038 1.77459L3.40931 6.40003L11.5038 11.0255C11.8113 11.2011 12.1887 11.2011 12.4961 11.0255L20.5906 6.40003L12.4961 1.77459ZM10.9085 0.732695C11.5848 0.346208 12.4151 0.346208 13.0915 0.732695L21.4899 5.53179C22.1617 5.91568 22.1617 6.88438 21.4899 7.26827L13.0915 12.0674C12.4151 12.4538 11.5848 12.4538 10.9085 12.0674L2.51006 7.26827C1.83824 6.88438 1.83824 5.91568 2.51006 5.53179L10.9085 0.732695Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M9.99997 10.6C10.3313 10.6 10.6 10.8687 10.6 11.2V21.8C10.6 22.1314 10.3313 22.4 9.99997 22.4C9.6686 22.4 9.39997 22.1314 9.39997 21.8V11.2C9.39997 10.8687 9.6686 10.6 9.99997 10.6Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M7.99997 9.40003C8.33134 9.40003 8.59997 9.66866 8.59997 10V20.6C8.59997 20.9314 8.33134 21.2 7.99997 21.2C7.6686 21.2 7.39997 20.9314 7.39997 20.6V10C7.39997 9.66866 7.6686 9.40003 7.99997 9.40003Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M5.99997 8.00003C6.33134 8.00003 6.59997 8.26866 6.59997 8.60003V19.8C6.59997 20.1314 6.33134 20.4 5.99997 20.4C5.6686 20.4 5.39997 20.1314 5.39997 19.8V8.60003C5.39997 8.26866 5.6686 8.00003 5.99997 8.00003Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M3.99997 7.00003C4.33134 7.00003 4.59997 7.26866 4.59997 7.60003V18.6C4.59997 18.9314 4.33134 19.2 3.99997 19.2C3.6686 19.2 3.39997 18.9314 3.39997 18.6V7.60003C3.39997 7.26866 3.6686 7.00003 3.99997 7.00003Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.7321 14.4C11.5664 14.1131 11.6647 13.7461 11.9517 13.5804L21.1316 8.28041C21.4185 8.11473 21.7855 8.21305 21.9512 8.50003C22.1169 8.787 22.0185 9.15396 21.7316 9.31964L12.5517 14.6196C12.2647 14.7853 11.8978 14.687 11.7321 14.4Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.6929 16.7321C11.5272 16.4451 11.6255 16.0781 11.9125 15.9124L21.0924 10.6124C21.3794 10.4468 21.7463 10.5451 21.912 10.8321C22.0777 11.119 21.9794 11.486 21.6924 11.6517L12.5125 16.9517C12.2255 17.1174 11.8586 17.019 11.6929 16.7321Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.4804 19.1641C11.3147 18.8771 11.413 18.5102 11.7 18.3445L21.3995 12.7445C21.6864 12.5788 22.0534 12.6771 22.2191 12.9641C22.3848 13.2511 22.2864 13.618 21.9995 13.7837L12.3 19.3837C12.013 19.5494 11.646 19.4511 11.4804 19.1641Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.6143 21.3961C11.4487 21.1091 11.547 20.7422 11.834 20.5765L21.3602 15.0765C21.6472 14.9108 22.0142 15.0091 22.1799 15.2961C22.3455 15.5831 22.2472 15.9501 21.9602 16.1157L12.434 21.6157C12.147 21.7814 11.78 21.6831 11.6143 21.3961Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Insights = useWithIcon(
  [
    {
      d: 'M10.2855 12.4002C10.2855 12.0688 10.5542 11.8002 10.8855 11.8002H12.7141C13.0455 11.8002 13.3141 12.0688 13.3141 12.4002C13.3141 12.7316 13.0455 13.0002 12.7141 13.0002H10.8855C10.5542 13.0002 10.2855 12.7316 10.2855 12.4002ZM9.19031 14.4002C9.19031 14.0688 9.45894 13.8002 9.79031 13.8002H13.8094C14.1407 13.8002 14.4094 14.0688 14.4094 14.4002C14.4094 14.7316 14.1407 15.0002 13.8094 15.0002H9.79031C9.45894 15.0002 9.19031 14.7316 9.19031 14.4002ZM8.09507 16.4002C8.09507 16.0688 8.3637 15.8002 8.69507 15.8002H14.9046C15.236 15.8002 15.5046 16.0688 15.5046 16.4002C15.5046 16.7316 15.236 17.0002 14.9046 17.0002H8.69507C8.3637 17.0002 8.09507 16.7316 8.09507 16.4002ZM6.99983 18.4002C6.99983 18.0688 7.26846 17.8002 7.59983 17.8002H15.9998C16.3312 17.8002 16.5998 18.0688 16.5998 18.4002C16.5998 18.7316 16.3312 19.0002 15.9998 19.0002H7.59983C7.26846 19.0002 6.99983 18.7316 6.99983 18.4002Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M10.9998 10.4002C10.9998 10.0688 11.2685 9.80019 11.5998 9.80019H11.9998C12.3312 9.80019 12.5998 10.0688 12.5998 10.4002C12.5998 10.7316 12.3312 11.0002 11.9998 11.0002H11.5998C11.2685 11.0002 10.9998 10.7316 10.9998 10.4002Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.6943 2.84858L1.40816 21.8002H22.182L11.6943 2.84858ZM10.8137 1.95543C11.1904 1.26136 12.1851 1.2573 12.5675 1.94825L23.3963 21.516C23.7651 22.1825 23.2831 23.0002 22.5213 23.0002H1.07205C0.313912 23.0002 -0.168487 22.1895 0.193163 21.5232L10.8137 1.95543Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.7998 7.47171L5.20149 19.8002H18.3982L11.7998 7.47171ZM10.9182 6.57599C11.295 5.87183 12.3046 5.87183 12.6815 6.57599L19.6137 19.5283C19.9703 20.1945 19.4876 21.0002 18.7321 21.0002H4.86761C4.11204 21.0002 3.62941 20.1945 3.98594 19.5283L10.9182 6.57599Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Users = useWithIcon(
  [
    {
      d: 'M4 1.4C3.00589 1.4 2.2 2.20588 2.2 3.2V20.8C2.2 21.7941 3.00589 22.6 4 22.6H20C20.9941 22.6 21.8 21.7941 21.8 20.8V3.2C21.8 2.20588 20.9941 1.4 20 1.4H4ZM1 3.2C1 1.54314 2.34315 0.199997 4 0.199997H20C21.6569 0.199997 23 1.54314 23 3.2V20.8C23 22.4569 21.6568 23.8 20 23.8H4C2.34315 23.8 1 22.4569 1 20.8V3.2Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12 12.4C13.7673 12.4 15.2 10.9673 15.2 9.2C15.2 7.43268 13.7673 6 12 6C10.2327 6 8.8 7.43268 8.8 9.2C8.8 10.9673 10.2327 12.4 12 12.4ZM12 13.6C14.4301 13.6 16.4 11.63 16.4 9.2C16.4 6.76994 14.4301 4.8 12 4.8C9.56995 4.8 7.6 6.76994 7.6 9.2C7.6 11.63 9.56995 13.6 12 13.6Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12 13.8C9.68708 13.8 7.8 15.6993 7.8 18.0571V19.2C7.8 19.5314 7.53137 19.8 7.2 19.8C6.86863 19.8 6.6 19.5314 6.6 19.2V18.0571C6.6 15.05 9.01099 12.6 12 12.6C14.989 12.6 17.4 15.05 17.4 18.0571V19.2C17.4 19.5314 17.1314 19.8 16.8 19.8C16.4686 19.8 16.2 19.5314 16.2 19.2V18.0571C16.2 15.6993 14.3129 13.8 12 13.8Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Billing = useWithIcon(
  [
    {
      d: 'M21.3879 6.59661C21.7925 6.80148 22.0421 7.10985 22.0953 7.44405C22.2115 8.17365 22.2373 9.32114 21.6591 10.5463C21.0853 11.7623 19.8842 13.1242 17.4223 14.2368C13.8291 15.8606 12.4871 18.087 12.1043 19.9859C11.9503 20.7501 11.9557 21.441 12.0155 21.9903L2.34621 17.0937C1.94165 16.8888 1.69209 16.5805 1.63886 16.2463C1.52263 15.5167 1.49689 14.3692 2.07502 13.144C2.6488 11.928 3.84994 10.5661 6.3118 9.45356C9.90506 7.82968 11.247 5.60335 11.6298 3.70446C11.7839 2.94027 11.7784 2.24932 11.7187 1.70001L21.3879 6.59661ZM10.3061 0.815925L10.3075 0.819504C10.3096 0.825268 10.3134 0.83574 10.3186 0.850699C10.329 0.880635 10.3448 0.928419 10.3635 0.992305C10.4008 1.12026 10.4491 1.31163 10.4882 1.55261C10.5666 2.03586 10.6064 2.70893 10.4535 3.46732C10.155 4.94803 9.09741 6.87783 5.81762 8.36004C3.14211 9.56916 1.70525 11.1156 0.989777 12.6319C0.278661 14.1389 0.312409 15.5475 0.453798 16.4351C0.584536 17.2557 1.16532 17.8408 1.80407 18.1643L12.5993 23.6311C12.8219 23.7438 13.091 23.707 13.2752 23.5386C13.4588 23.3708 13.5197 23.1071 13.4286 22.8758C13.4283 22.8751 13.428 22.8744 13.4278 22.8737L12.8704 23.0958C13.4278 22.8737 13.4276 22.8734 13.4278 22.8737L13.4267 22.8708C13.4245 22.8651 13.4207 22.8546 13.4155 22.8396C13.4051 22.8097 13.3893 22.7619 13.3707 22.698C13.3334 22.5701 13.285 22.3787 13.246 22.1377C13.1676 21.6545 13.1278 20.9814 13.2807 20.223C13.5792 18.7423 14.6367 16.8125 17.9165 15.3303C20.592 14.1212 22.0289 12.5747 22.7444 11.0584C23.4555 9.55142 23.4217 8.14284 23.2804 7.25527C23.1496 6.43457 22.5688 5.84952 21.9301 5.52605L11.1349 0.0592706C10.9123 -0.0534552 10.6431 -0.0166527 10.459 0.151697C10.2754 0.319543 10.2144 0.583217 10.3056 0.814517C10.3057 0.814977 10.3059 0.815464 10.3061 0.815925Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M12.5999 22.9715C15.1599 24.2515 16.5332 21.6382 16.7999 20.1715L13.3999 18.4715L12.5999 21.7997V22.9715Z',
    },
    {
      d: 'M13.1467 17.9276C13.3125 17.8504 13.5046 17.8531 13.6682 17.9349L17.0682 19.6349C17.3067 19.7541 17.4379 20.0165 17.3902 20.2789C17.2415 21.0965 16.7888 22.2443 15.9779 23.0319C15.564 23.434 15.0399 23.7575 14.404 23.871C13.764 23.9851 13.0675 23.8762 12.3315 23.5082C12.1283 23.4065 11.9999 23.1988 11.9999 22.9715V21.7997C11.9999 21.7524 12.0054 21.7053 12.0165 21.6594L12.8165 18.3313C12.8592 18.1534 12.9808 18.0048 13.1467 17.9276ZM13.8068 19.3458L13.1999 21.8708V22.5784C13.5928 22.721 13.9208 22.7382 14.1933 22.6896C14.5432 22.6272 14.8591 22.4458 15.1418 22.1711C15.6034 21.7228 15.9298 21.0694 16.1042 20.4945L13.8068 19.3458Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      d: 'M11.9462 7.05277C12.0969 6.75765 12.4583 6.64056 12.7534 6.79126L17.919 9.42889C18.2141 9.57959 18.3312 9.941 18.1805 10.2361C18.0298 10.5312 17.6684 10.6483 17.3733 10.4976L12.2077 7.85999C11.9126 7.7093 11.7955 7.34789 11.9462 7.05277ZM9.49888 9.49328C9.64958 9.19816 10.011 9.08108 10.3061 9.23177L15.4717 11.8694C15.7668 12.0201 15.8839 12.3815 15.7332 12.6766C15.5825 12.9718 15.2211 13.0888 14.9259 12.9381L9.76039 10.3005C9.46527 10.1498 9.34819 9.7884 9.49888 9.49328ZM7.03494 11.933C7.18563 11.6378 7.54704 11.5208 7.84216 11.6715L10.8702 13.2177C11.1654 13.3683 11.2824 13.7298 11.1318 14.0249C10.9811 14.32 10.6196 14.4371 10.3245 14.2864L7.29645 12.7402C7.00132 12.5895 6.88424 12.2281 7.03494 11.933Z',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);

export const Settings = useWithIcon(
  [
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M19.0847 10.7691C18.4524 11.4013 17.6668 11.7835 16.8478 11.9172C16.5208 11.9706 16.2989 12.279 16.3523 12.606C16.4057 12.9331 16.7141 13.1549 17.0411 13.1015C18.1001 12.9287 19.1173 12.4335 19.9333 11.6176C22.0046 9.54628 22.0046 6.18802 19.9333 4.11671C17.8619 2.0454 14.5036 2.0454 12.4323 4.11671C10.3609 6.18802 10.3609 9.54628 12.4323 11.6176L13.2808 10.7691C11.6781 9.16639 11.6781 6.56792 13.2808 4.96523C14.8835 3.36255 17.482 3.36255 19.0847 4.96523C20.6874 6.56792 20.6874 9.16639 19.0847 10.7691Z',
    },
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M20.7478 12.4325C19.7535 13.4269 18.5171 14.0284 17.2286 14.2387C16.9016 14.2921 16.6797 14.6005 16.7331 14.9275C16.7865 15.2545 17.0949 15.4764 17.4219 15.423C18.9504 15.1736 20.4184 14.459 21.5964 13.2811C24.5862 10.2913 24.5862 5.44381 21.5964 2.454C18.6065 -0.535813 13.759 -0.535814 10.7692 2.454C7.77931 5.44381 7.77932 10.2913 10.7692 13.2811L11.6177 12.4325C9.09648 9.91136 9.09648 5.82371 11.6177 3.30252C14.1389 0.781334 18.2266 0.781335 20.7478 3.30252C23.2691 5.82371 23.2691 9.91136 20.7478 12.4325Z',
    },
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M4.96519 13.2809C5.59747 12.6486 6.3831 12.2664 7.20212 12.1328C7.52916 12.0794 7.75101 11.771 7.69763 11.444C7.64426 11.1169 7.33586 10.8951 7.00882 10.9484C5.94986 11.1213 4.93259 11.6164 4.11665 12.4324C2.04531 14.5037 2.04531 17.8619 4.11665 19.9333C6.18799 22.0046 9.5463 22.0046 11.6176 19.9333C13.689 17.8619 13.689 14.5039 11.6177 12.4325L10.7692 13.2811C12.3719 14.8838 12.3718 17.4821 10.7691 19.0847C9.16639 20.6874 6.56789 20.6874 4.96519 19.0847C3.36248 17.482 3.36248 14.8836 4.96519 13.2809Z',
    },
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M3.30207 11.6174C4.29641 10.6231 5.53277 10.0216 6.82128 9.81128C7.14832 9.7579 7.37017 9.44951 7.31679 9.12247C7.26342 8.79542 6.95502 8.57358 6.62798 8.62696C5.09953 8.87642 3.63153 9.59093 2.45354 10.7689C-0.536311 13.7587 -0.536312 18.6062 2.45354 21.596C5.44339 24.5858 10.2909 24.5858 13.2807 21.596C16.2706 18.6062 16.2707 13.7589 13.2808 10.7691L12.4323 11.6176C14.9535 14.1388 14.9534 18.2263 12.4322 20.7474C9.911 23.2686 5.82329 23.2686 3.30207 20.7474C0.780854 18.2263 0.780854 14.1386 3.30207 11.6174Z',
    },
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M6.6283 14.9436C6.99825 14.5736 7.49155 14.4036 7.97707 14.4339C8.38869 14.4595 8.79152 14.6291 9.10599 14.9436C9.79019 15.6278 9.79019 16.7371 9.10599 17.4212C8.4218 18.1054 7.3125 18.1054 6.6283 17.4212C5.9441 16.7371 5.9441 15.6278 6.6283 14.9436ZM8.05174 13.2362C7.23723 13.1854 6.40327 13.4716 5.77977 14.0951C4.62694 15.2479 4.62694 17.117 5.77977 18.2698C6.93259 19.4226 8.8017 19.4226 9.95452 18.2698C11.1074 17.117 11.1074 15.2479 9.95452 14.0951C9.42543 13.566 8.74401 13.2794 8.05174 13.2362Z',
    },
    {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M17.4216 9.10638C17.0517 9.47633 16.5584 9.64637 16.0729 9.6161C15.6612 9.59044 15.2584 9.42086 14.9439 9.10638C14.2597 8.4222 14.2597 7.31291 14.9439 6.62872C15.6281 5.94454 16.7374 5.94454 17.4216 6.62872C18.1058 7.31291 18.1058 8.4222 17.4216 9.10638ZM15.9982 10.8138C16.8127 10.8646 17.6466 10.5784 18.2701 9.95491C19.423 8.80209 19.423 6.93301 18.2702 5.7802C17.1173 4.62739 15.2482 4.62739 14.0954 5.7802C12.9426 6.93301 12.9426 8.80209 14.0954 9.95491C14.6245 10.484 15.3059 10.7706 15.9982 10.8138Z',
    },
  ],
  {
    fill: 'none',
    viewBox: '0 0 24 24',
  },
);