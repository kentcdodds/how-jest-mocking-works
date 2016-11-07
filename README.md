# How Jest Mocking Works

This title is a bit misleading. I'm not explaining everything about Jest mocking, just something I wanted to test out
and thought was kind of interesting. So it turns out that if you make a call to `jest.mock` in the root of your module,
that mocking will take place before any require statements are resolved/run. This actually makes Jest's mocking
capabilities really powerful! It essentially means that you can import all the stuff you would normally, and not worry
about whether you're mocking things in time. Pretty legit!
