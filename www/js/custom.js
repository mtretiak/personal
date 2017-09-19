/**
 * Created by mtretiak on 2017-08-31.
 */



var feed = new Instafeed({
    get: 'user',
    userId: '1121827',
    limit: 3,
    resolution: 'standard_resolution',
    accessToken: '1121827.1677ed0.e3028b5b5c1942c2aeb8aba1106bdb14'
});

feed.run();
