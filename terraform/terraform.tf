terraform {
  backend "gcs" {
    credentials = "./terraform-gke-keyfile.json"
    bucket      = "aditya-gke-terraform"
    prefix      = "terraform/state"
  }
}