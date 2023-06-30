import Image from 'next/image';
import { clsx } from 'clsx';
import styles from './Avatar.module.sass';

import LimmyAvatar from '@/public/limmy-avatar.webp'
import AsmonAvatar from '@/public/asmon-avatar.webp'

type Props = {
    miniature?: boolean,
    id: number
};

export const Avatar: React.FC<Props> = ({ miniature = false, id }) => {

    return (
        <div className={clsx(styles.wrapper, miniature && styles.mini)}>

            <Image className={styles.avatar}
                src={id % 2 === 0 ? AsmonAvatar : LimmyAvatar}
                alt="streamer avatar"
                sizes={`(orientation: portrait) ${miniature ? 10 : 20}vh, ${miniature ? 20 : 40}vh`}
            />
        </div>
    );
};