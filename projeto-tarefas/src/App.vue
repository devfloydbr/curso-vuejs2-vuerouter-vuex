<template>
	<div id="app">
		<header>
			<img src="./assets/logo.png" alt="DevFloydBR">
			<h2>TASK SCHEDULER</h2>
		</header>
		<main>
			<div class="main-cont">				
				<div class="form-cont">
					<form @submit="insertTask" id="form-tasks">
						<div class="input-group mb-3">
							<input 
								@keyup="toUppercase"
								type="text" 
								class="form-control" 
								name="task"
								placeholder="Insira uma tarefa" 
								aria-label="Username" 
								aria-describedby="basic-addon1">
							<span class="input-group-text" id="basic-addon1">
								<button type="submit" class="btn btn-primary">Inserir</button>
							</span>
						</div>	
					</form>
				</div>
				<div class="progress-cont">
					<div class="progress">
						<div 
							class="progress-bar" 
							role="progressbar" 
							:style="{ width: `${progress}%`, backgroundColor: '#14b83d'}" 
							:aria-valuenow="progress" 
							aria-valuemin="0" 
							aria-valuemax="100"
						>{{ progress }}%</div>
					</div>
				</div>
				<div class="task-cont">
					<div class="wrapper">
						<Task v-for="(task, i) in tasks" v-bind:key="i"  :task="{i, task}"/>
					</div>
				</div>
			</div>			
		</main>
	</div>
</template>

<script>
import Task from '@/components/Task'

import stateBus from '@/stateBus'

export default {
	components: { Task },
	data() {
		return {
			tasks: JSON.parse(localStorage.getItem('@task-manager-tasks')) ? JSON.parse(localStorage.getItem('@task-manager-tasks')) : [],
			progress: 0
		}
	},	
	created() {		
        stateBus.onChangeTaskReceived(task => {
			let tasks = [...this.tasks];

			tasks[task].done = !this.tasks[task].done

            this.tasks = tasks		

			this.calcProgress();
			
			localStorage.setItem('@task-manager-tasks', JSON.stringify(this.tasks))			
        })
    },
	beforeMount() {
		this.calcProgress();
	},
	methods: {
		toUppercase(e) {
			e.target.value = e.target.value.toUpperCase();
		},
		insertTask(e) {
			e.preventDefault()

			const task = {
				task : document.getElementsByName('task')[0].value,
				done: false
			}

			const tasks = [...this.tasks];

			this.tasks.push(task)

			localStorage.setItem('@task-manager-tasks', JSON.stringify(this.tasks))

			document.forms["form-tasks"].reset();
		},
		calcProgress() {
			const tasks = this.tasks.length

			const part = 100 / tasks

			const filteredTasks = this.tasks.filter(task => task.done === true);

			this.progress = isNaN(Math.round(part * filteredTasks.length)) ? 0 : Math.round(part * filteredTasks.length);
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, #c31432, #240b36);
		color: #FFF;
	}

	textarea:focus, 
	textarea.form-control:focus, 
	input.form-control:focus, 
	input[type=text]:focus, 
	input[type=password]:focus, 
	input[type=email]:focus, 
	input[type=number]:focus, 
	[type=text].form-control:focus, 
	[type=password].form-control:focus, 
	[type=email].form-control:focus, 
	[type=tel].form-control:focus, 
	[contenteditable].form-control:focus {
	box-shadow: inset 0 -1px 0 #ddd;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;		
		height: 100vh;
	}

	#app header {
		text-align: center;
	}

	#app header img {
		width: 350px;
	}

	#app main {
		width: 100%;
		height: 100%;

		display: flex;
		
		justify-content: center;
	}

	#app main .main-cont {
		width: 80%;

		display: flex;
		flex-direction: column;

		padding: 15px 0;
	}

	.main-cont .form-cont {
		display: flex;
		justify-content: center;
	}

	.form-cont form {
		width: 40%;
	}

	.main-cont .progress-cont {
		padding: 15px 0;
	} 
	
	.main-cont .task-cont {
		background: #2e2e2e;
		padding: 20px;
		border-radius: 4px;

		flex: 1;
		
		display: flex;
		align-items: center;
		justify-content: center;
		
	}

	.main-cont .task-cont .wrapper {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(100%/3), auto));
		gap: 20px;
	}
	
	
</style>
