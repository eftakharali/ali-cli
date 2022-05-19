import {Command} from '@oclif/core'
const chalk = require('chalk');



export default class Nayana extends Command {
  

  static args = [{name: 'pathToProject'}]

  public async run(): Promise<void> {
    
    const {args} = await this.parse(Nayana);


    const execSync = require('child_process').execSync;

    let dir = execSync('pwd', { encoding: 'utf-8' });

    if(args.pathToProject != undefined) {
      dir = args.pathToProject;
    }

    console.log(chalk.green("The directory you chose is: " + dir));

    const listAllRepos = 'ls ' + dir;

    let output = execSync(listAllRepos, { encoding: 'utf-8' });  // the default is 'buffer'

    output = output.split("\n");

    process.chdir(dir);
  
   for(let repo in output) {

      process.chdir(dir+ "/" + output[repo]);

      const listMergedBranchesCommand = 'git branch  -r --merged master';
      const isGitRepoCommand = 'git status 2>/dev/null; echo $?';

      const isGitRepo = execSync(isGitRepoCommand, { encoding: 'utf-8' });

      if(isGitRepo == 128) {

        console.log(chalk.bgRed(output[repo] + " has no git initialized therefore skipping it"));
        
      } else {

         const branches = execSync(listMergedBranchesCommand, { encoding: 'utf-8' });
          console.log(chalk.bgBlue(output[repo] + " has the following branches: ") );
          console.log(branches);

      }
     
       process.chdir(dir);


      
   }

  }
}
