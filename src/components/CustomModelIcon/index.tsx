import { memo } from 'react';
import { IconAvatarProps } from '@lobehub/icons';

interface CustomModelIconProps extends Omit<IconAvatarProps, 'model'> {
  model: string;
}

const CustomModelIcon = memo<CustomModelIconProps>(({ model, size = 20, ...props }) => {
  // 如果是 OpenAI 模型，使用自定义图标
//   if (model.toLowerCase().includes('gpt') || model.toLowerCase().includes('openai')) {
    if (true) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...(props as React.SVGProps<SVGSVGElement>)}
      >
        <circle cx="500" cy="500" r="500" fill="#F65C05"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M490.401 507.363C450.371 532.993 413.326 552.66 384.135 566.748C364.877 576.042 348.969 582.941 337.785 587.549C332.191 589.854 327.773 591.588 324.703 592.764C323.168 593.352 321.97 593.801 321.128 594.111C320.708 594.267 320.376 594.388 320.138 594.475L319.849 594.58L319.757 594.613L319.711 594.629C319.711 594.629 319.7 594.633 309.304 565.125C298.908 535.617 298.899 535.621 298.899 535.621L299.03 535.573C299.162 535.525 299.385 535.444 299.696 535.329C300.319 535.099 301.294 534.734 302.6 534.234C305.214 533.233 309.151 531.689 314.243 529.591C324.431 525.393 339.222 518.985 357.268 510.275C393.413 492.831 442.346 466.288 493.444 429.959C506.706 420.531 517.287 413.497 525.292 409.213C528.929 407.267 534.399 404.569 540.506 403.283C544.785 402.383 565.236 399.292 576.664 418.598C581.049 426.007 581.454 433.183 581.354 437.013C581.248 441.074 580.483 444.485 579.898 446.665C578.731 451.004 576.967 455.114 575.624 458.06C573.83 461.999 571.257 467.066 568.817 471.874C567.704 474.066 566.618 476.204 565.647 478.156C558.085 493.348 552.781 506.36 552.048 515.726C551.86 518.126 552.066 519.36 552.187 519.838C552.539 520.135 553.29 520.653 554.698 521.275C556.716 521.483 561.334 521.064 570.977 516.466C576.314 513.92 582.016 510.686 588.683 506.78C589.752 506.154 590.854 505.506 591.986 504.841C597.526 501.58 603.741 497.924 609.888 494.64C624.005 487.101 644.063 477.884 666.311 479.525C691.405 481.377 711.655 496.077 727.043 519.842L678.537 558.696C670.895 546.895 668.126 542.286 661.854 541.984C661.82 541.982 661.792 541.981 661.768 541.978C658.272 541.721 651.711 543.186 639.015 549.965C634.103 552.588 629.223 555.458 623.714 558.696C622.489 559.416 621.234 560.155 619.941 560.912C613.189 564.867 605.509 569.284 597.585 573.062C582.473 580.27 560.812 588.019 537.298 581.485L536.09 581.149L534.912 580.716C519.369 575.005 506.462 565.364 498.367 551.279C490.506 537.599 489.106 523.061 490.065 510.807C490.155 509.659 490.267 508.51 490.401 507.363ZM551.923 519.567C551.93 519.564 551.985 519.615 552.066 519.731C551.957 519.628 551.916 519.57 551.923 519.567Z" fill="white"/>
        <path d="M725.883 471.194C743.052 471.194 756.971 457.176 756.971 439.883C756.971 422.591 743.052 408.573 725.883 408.573C708.714 408.573 694.796 422.591 694.796 439.883C694.796 457.176 708.714 471.194 725.883 471.194Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M135.218 543.61V371.003L197.393 371.002V543.61C197.393 578.491 253.264 553.845 269.652 548.309L282.455 606.337C244.046 622.456 212.562 633.927 184.348 624.237C168.858 618.917 155.518 608.657 146.608 592.876C138.092 577.792 135.218 560.499 135.218 543.61Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M865.002 544.733V371.001L804.296 371V544.733C804.296 585.697 760.66 555.897 745.795 541.957L704.961 588.294C738.874 620.094 776.73 635.859 810.962 625.971C847.336 615.465 865.002 580.643 865.002 544.733Z" fill="white"/>
      </svg>
    );
  }

  // 对于其他模型，继续使用原有的 ModelIcon
  const { ModelIcon } = require('@lobehub/icons');
  return <ModelIcon model={model} size={size} {...props} />;
});

export default CustomModelIcon;