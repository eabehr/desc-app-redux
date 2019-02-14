import webpack from 'webpack';
import config from '../webpack.config.babel';

webpack(config, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(
        stats.toString({
            chunks: true,
            colors: true
        })
    );
});
