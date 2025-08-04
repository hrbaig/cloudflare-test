import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './_index.module.scss';
import { Accordion, Grid, Image } from 'semantic-ui-react';
import styles0 from './route.module.scss';
import classNames from 'classnames';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>
                <button>Button</button>
                Welcome To App Homepage 🎉
            </h2>
            <span className={styles.paragraph}>
                Drag here elements from the Add Elements Panel
                <br /> and style them using the Styles panel
                <div className={styles0.heroTitle}>
                    <h1 className={styles0.heroTitleHeading}>Welcome to CarePlus</h1>
                    <div className={styles0.heroTitleButtons}>
                        <a href="#" className={styles0.heroTitleSecondaryButton}>
                            Contact Us
                        </a>
                        <a href="#" className={styles0.heroTitlePrimaryButton}>
                            Learn More
                        </a>
                    </div>
                </div>
            </span>
            <div className={styles0.div1}>
                <div
                    style={{
                        width: 'auto',
                        overflow: 'visible',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Grid
                        centered
                        padded
                        columns={2}
                        className={classNames(styles0.grid, styles0.grid)}
                    >
                        <Grid.Row className={styles0.gridRow}>
                            <Grid.Column className={styles0.gridColumn}>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                            <Grid.Column className={styles0.gridColumn1}>
                                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
