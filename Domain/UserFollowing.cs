using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class UserFollowing
    {

        
         [MaxLength(450)]
        public string ObserverId { get; set; }
        public AppUser Observer { get; set; }
         [MaxLength(100)]
        public string TargetId { get; set; }
        public AppUser Target { get; set; }
    }
}