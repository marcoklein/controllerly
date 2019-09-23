
/**
 * Delay helper from https://stackoverflow.com/questions/25537808/make-mocha-wait-before-running-next-test
 * 
 * @param interval 
 */
export function delay(interval: number) 
{
   return it('should delay', done => 
   {
      setTimeout(() => done(), interval)

   }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}